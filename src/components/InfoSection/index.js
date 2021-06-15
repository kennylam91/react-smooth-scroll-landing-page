import React from 'react';
import { BtnWrap, Column1, Heading, Img, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements';
import {Button} from '../ButtonElements';

const InfoSection = ({lightBg, id, imgStart, topLine, headLine, lightText, darkText, description,buttonLabel, img, alt}) => {
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrap>
									<Button to="home">{buttonLabel}</Button>
								</BtnWrap>
							</TextWrapper>	
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />	
							</ImgWrap>	
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	)
}

export default InfoSection
