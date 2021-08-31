import './styles/tailwind.css';
import './styles/Home.modules.css'

export const App = () => {

  return (
    <div className="padre bg-gray-50 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 sm:grid-rows-2 md:grid-rows-1">
      <div className="bg-gray-200 rounded-md shadow-lg hover:shadow-2xl transition-all delay-75 duration-300 ease-in-out m-3 hover:m-1">hey</div>
      <div className="lg:col-span-3 md:col-span-3 bg-gray-200 rounded-md shadow-lg hover:shadow-2xl transition-all delay-75 duration-300 ease-in-out m-3 hover:m-1">
        <div className="flex flex-col h-full w-full max-w-full justify-items-center justify-self-center items-center">
          <h1 className="m-2 mb-8 text-4xl">Aitor Ruiz portfolio</h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2/4 grid-rows-2 gap-3">
            <div className=" h-96 rounded-md shadow-xl bg-gray-300">
              <h1 className="m-2 mb-8 text-4xl">Node js</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
