import React, {useEffect, useState} from  "react";
import onejpg from "../assets/img/01.jpg";
import twojpg from "../assets/img/02.jpg";
import threejpg from "../assets/img/03.jpg";
import BodySection from "./bodysection";
import bodyData from '../assets/data/bodysection.json';

const IMAGE_PATH = "./assets/img/";
let flip_flop = true;

const imagePathFor = (imageName) => {
  console.log(IMAGE_PATH + imageName);
  switch (imageName) {
    case "01.jpg":
      return onejpg;
    case "02.jpg":
      return twojpg;
    default:
      return threejpg;
  }
}

const BodySections = () => {

  let [sectionContent, setSectionContent] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect is invoked for BodySections');
    setSectionContent(bodyData);
    setIsLoading(false);
    return () => {
      console.log('Wrapped up everything for BodySections');
    };
  },[sectionContent, isLoading]);

  if (isLoading === true) {
    return (<div></div>);
  } else {
    console.log(sectionContent);
  }

  return (
    <div>
      {
        sectionContent.map((content, index) => { 
          flip_flop = !flip_flop;
          return (
            <BodySection key={content.title} image={imagePathFor(content.image)} 
              title={content.title} imageLeft={flip_flop}>
              <p>{content.content}</p>
            </BodySection>
          )})
      }
    </div>
  );
};

export default BodySections;
