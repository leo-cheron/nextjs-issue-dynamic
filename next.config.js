const analyze = require('@next/bundle-analyzer')

const withBundleAnalyzer = analyze({
	enabled: process.env.ANALYZE === 'true',
})

/** @type {import("next").NextConfig} */
module.exports = withBundleAnalyzer({
	reactStrictMode: true,
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
