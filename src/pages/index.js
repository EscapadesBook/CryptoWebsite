import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import { FaGalacticRepublic, FaHornbill, FaReact } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="--color-darkL2" padding="60px 0" sm-padding="40px 0">
			<Box margin="-16px -16px -16px -16px" padding="16px 16px 16px 16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box
						background="url(https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) 50% 15%/cover"
						padding="0px 0px 672px 0px"
						margin="0px -112px 0px 0px"
						lg-margin="0px 0px 0px 0px"
						sm-padding="0px 0px 400px 0px"
					/>
				</Box>
				<Box width="50%" display="flex" padding="16px 16px 0px 16px" lg-width="100%">
					<Box
						padding="98px 64px 98px 64px"
						mix-blend-mode="lighten"
						background="--color-red"
						margin="36px 0px -20px -112px"
						display="flex"
						flex-direction="column"
						color="--light"
						lg-margin="0px 0px 0px 0px"
						lg-width="100%"
						sm-padding="64px 32px 64px 32px"
					>
						<Text
							as="h4"
							margin="0"
							font="--base"
							letter-spacing="1px"
							text-transform="uppercase"
						>
							About me
						</Text>
						<Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
							Hey I’m David
						</Text>
						<Text as="p" margin="16px 0" font="--base" max-width="400px">
							My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="24px 4%" md-grid-template-columns="1fr">
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaGalacticRepublic}
						margin="0px 0px 16px 0px"
						color="--dark"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Design
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaHornbill}
						margin="0px 0px 16px 0px"
						color="--dark"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Frontend
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaReact}
						margin="0px 0px 16px 0px"
						color="--dark"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Backend
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"66436e706bbd2000236a8d2b"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});