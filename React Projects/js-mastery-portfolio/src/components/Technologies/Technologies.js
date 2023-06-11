import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="tech">
		<SectionDivider divider />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I've worked with a range a technologies in the web development world.
		</SectionText>
		<List>
			<ListItem>
				<picture>
					<DiReact size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>React</ListTitle>
					<ListParagraph>
						Experiece with <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiFirebase size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>Back End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node Js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiZend size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>A/B testing</ListTitle>
					<ListParagraph>
						Experience with <br />
						tools VWO, Googel Optimize, Convert, and many more
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
		<SectionDivider colorAlt />
	</Section>
);

export default Technologies;
