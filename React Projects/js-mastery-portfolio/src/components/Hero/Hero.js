import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Welcome To <br />
					My Digital Playground
				</SectionTitle>
				<SectionText>
					I am a software Engineer specializing in A/B testing, jQuery, React,
					and Next.js. With a keen eye for design and a knack for
					problem-solving, I strive to create intuitive and immersive
					experiences that seamlessly blend form and function.
				</SectionText>
				<Button onClick={props.handleClick}>Start Exploring Now</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
