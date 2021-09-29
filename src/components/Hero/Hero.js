import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi<br />
          My name is Rahul<br/>
        </SectionTitle>
        <SectionText>
          Computer Science and Engineering student, Aspiring Full-Stack Developer, Loves learning new stuffs.
        </SectionText>
        <Button onClick={props.handleClick}>More Soon</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;