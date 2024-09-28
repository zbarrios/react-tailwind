import { useState } from "react";

function ContainerCards({ text, agentes }) {
  const objetosFiltrados = agentes.filter((o) =>
    o.displayName.toUpperCase().includes(text.toUpperCase())
  );

  console.log("Se renderizo el contenedor");
  

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center">
        {objetosFiltrados.map((o) => (
          <ComicCard
            key={o.id}
            title={o.displayName.toUpperCase()}
            image={o.displayIcon}
          ></ComicCard>
        ))}
      </div>
    </>
  );
}

function ComicCard({ title, image }) {
  const [details, setDetails] = useState(false);

  function handleClickDetails() {
    setDetails(!details);
  }

  console.log("se tenderiza Card");
  

  if (details)
    return (
      <>
        <div className="relative group w-64 flex flex-col justify-between">
          Detalles
          <button
            className="bg-yellow-500 text-black px-4 py-2 font-bold w-full"
            onClick={() => handleClickDetails()}
          >
            Detalles
          </button>
        </div>
      </>
    );

  return (
    <div className="relative group w-64 flex flex-col justify-between">
      <div className="bg-black relative w-full h-5/6">
        <img
          src={image}
          alt={title}
          className="w-full h-full transition-opacity duration-300 group-hover:opacity-30 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="bg-yellow-500 text-black px-4 py-2 font-bold w-full"
            onClick={() => handleClickDetails()}
          >
            Read More
          </button>
          <div className="bg-black absolute"></div>
        </div>
        <div className="bg-black/90 h-full w-full absolute left-1 top-1 -z-10 "></div>
      </div>

      <div className="h-1/6 relative border-solid border-2 border-slate-400/30 pt-2 pb-6 pl-3">
        <h2 className=" font-bold text-left">{title}</h2>
        <div className="h-1.5 w-1.5 bg-red-500 absolute bottom-0 right-0"></div>
      </div>
    </div>
  );
}

export { ContainerCards, ComicCard };
