import { useTranslation } from "react-i18next";
import ExperienceListing from "./ExperienceListing";

// import data from './translateable_experience_data'
import { useEffect, useState } from "react";
import { Experience } from "./translateable_experience";

const ExperienceBox = () => {
  const [data, setData] = useState<Experience[]>([])

  const { t } = useTranslation()

  useEffect(() => {
    if (data.length > 0) return

    (async () => {
      const x = await fetch('/data/experience.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      let json = await x.json()

      setData(json)
    })()
  })
  

  if (!data) return null

  console.log(data)

  return (
    <div className="bg-white rounded-xl mt-4 lg:mt-0">
      <div className="p-1">
        <div className="p-4 font-medium text-base">{t('experience')}</div>
        {data.map((v, i) => {
          // return <p key={i}>hi</p>
          return <ExperienceListing {...v} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceBox;
