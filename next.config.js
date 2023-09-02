const analyze = require('@next/bundle-analyzer')

const withBundleAnalyzer = analyze({
	enabled: process.env.ANALYZE === 'true',
})

/** @type {import("next").NextConfig} */
module.exports = withBundleAnalyzer({
	reactStrictMode: true,
	swcMinify: true,
	// transpilePackages: ['@local/ui'],
	// modularizeImports: {
	// 	'@local/ui/?(((\\w*)?/?)*)': {
	// 		transform: '@local/ui/{{ matches.[1] }}/{{ camelCase member }}/{{ member }}',
	// 		skipDefaultConversion: true,
	// 	},
	// 	'@local/hooks/?(((\\w*)?/?)*)': {
	// 		transform: '@local/hooks/{{ matches.[1] }}/{{ member }}',
	// 	},
	// },
	experimental: {
		legacyBrowsers: false,
		// externalDir: true,
		outputFileTracingExcludes: {
			'*': [
				// prettier-ignore
				'node_modules/@swc/core-linux-x64-gnu',
				'node_modules/@swc/core-linux-x64-musl',
				'node_modules/@esbuild/linux-x64',
			],
		},
	},
	webpack: (config, props) => {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.('.svg'),
		)

		config.module.rules.push(
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				// issuer: /\.[jt]sx?$/,
				resourceQuery: {not: /url/}, // exclude if *.svg?url
				use: [{
					loader: '@svgr/webpack',
					options: {
						svgoConfig: {
							plugins: [{
								name: 'preset-default',
								params: {
									overrides: {
										removeViewBox: false,
									},
								},
							}],
						},
					},

				}],
			},
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				loader: 'next-image-loader',
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
		)

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i

		return config
	},
})
