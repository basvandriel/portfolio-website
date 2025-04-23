const App = () => {
  return <>
    <div className="max-w-5xl mx-auto">
      <div className="flex h-screen text-slate-100 mt-32  ">

        {/* left section */}
        <div className="max-w-sm sticky">
          <h1 className="text-5xl font-bold mb-2 tracking-tight font-Inter">Bas van Driel</h1>
          <p className="text-xl font-medium tracking-tight">Senior Python Engineer, DevOps Engineer</p>

          <p className="mt-4 leading-normal text-slate-500">
            Ambitieuze, hardwerkende en gedreven Senior Python developer met met minimaal 10 jaar ervaring en oog voor detail. Woonachtig in Hulst, communicatief vaardig en staat in om onafhankelijk in groepen en zelfstandig te kunnen werken.
          </p>


          <p className="mt-4 leading-normal text-slate-500">
            Voor vragen, digitale bakjes koffie of andere informatie kunt u altijd contact met mij opnemen via de onderstaande links.
          </p>

          {/* nav buttons that scroll */}
          <div className="uppercase font-bold text-xs mt-8 text-slate-600 tracking-widest transition-all duration-100">
            <a className="group flex items-center py-3 hover:text-slate-500 transition-all duration-100" href="#about">
              <span className="h-px w-8 bg-slate-600 mr-4 group-hover:bg-slate-500 group-hover:w-16 transition-all duration-100 "/>
              <p>werkervaring</p>
            </a>

            <a className="group flex items-center py-3 hover:text-slate-500 transition-all duration-100" href="#about">
              <span className="h-px w-8 bg-slate-600 mr-4 group-hover:bg-slate-500 group-hover:w-16 transition-all duration-100"/>
              <p>educatie</p>
            </a>
            
            <a className="group flex items-center py-3 hover:text-slate-500 transition-all duration-100" href="#about">
              <span className="h-px w-8 bg-slate-600 mr-4 group-hover:bg-slate-500 group-hover:w-16 transition-all duration-100"/>
              <p>projecten</p>
            </a>
          </div>

          {/* call to action */}
          <div className="flex items-center text-xs space-x-4 mt-8">
            <button className="bg-teal-400/10 hover:bg-teal-600/10 text-teal-200 font-bold py-2 px-4 rounded-full transition-all duration-100">
              Boek een kennismaking
            </button>

            <button className="text-slate-500 hover:text-slate-400 font-bold rounded-full transition-all duration-100">
              Stuur me een e-mail
            </button>
          </div>
        </div>

        {/* right section */}
        <div className="flex-1 flex ml-32">

          <div className="flex flex-col">

            {/* description */}
            <p className="text-xs text-left text-slate-600">JULY 2018 - PRESENT</p>

            <div className="text-base text-slate-300 font-medium leading-tight mt-1">
              Senior Python Developer, DevOps Engineer - ABN AMRO
            </div>

            <p className="text-sm text-slate-500 mt-2 max-w-xl leading-normal">
            Ontwikkelen, beheren en ondersteunen van een op maat gemaakte softwareoplossing voor grootschalige gegevensbeschikbaarheid en -transformatie. Dit omvat het gebruik van verschillende Azure-diensten zoals Databricks, Data Factory en pipelines. Daarnaast wordt er een aanzienlijke hoeveelheid DevOps-werk verricht, waaronder het ontwikkelen en beheren van CI/CD-pipelines en het onderhouden en voorbereiden van een Azure-omgeving voor productie.
            </p>
          </div>
          {/* lets add work blocks here */}

        </div>
      </div>
    </div>
  </>
}
export default App;