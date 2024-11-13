import React from "react";
import { animaldata } from "../../../Constant/index"; // استيراد بيانات الحيوانات
import Image from "next/image";
import PropTypes from "prop-types";
import { ProductCard } from "../../../../Components/Product/page";

// مكون Server Component لجلب البيانات
const AnimalDetailPage = async ({ params }) => {
  const { id } = params; // الحصول على الـ id من الـ params
  const selectedAnimal = animaldata.find((animal) => animal.id === id);

  // إذا لم يتم العثور على الحيوان، نرجع صفحة 404
  if (!selectedAnimal) {
    return <div>Animal not found!</div>;
  }

  return (
    <section className="py-32" key={selectedAnimal.id}>
      <div className="max-w-screen-lg mx-auto lg:mx-20  px-3">
        <div className="flex flex-col md:flex-row justify-start gap-8">
          <div className="w-full">
            <Image
              src={selectedAnimal.imgdetail}
              alt={selectedAnimal.title}
              className="rounded-lg w-[800px] shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-[#385013]">
              {selectedAnimal.title}
            </h1>
            <p className="text-lg mt-4 font-semibold text-gray-600">
              {selectedAnimal.description}
            </p>
            <div className="flex items-start justify-start gap-5 py-6">
              <span className="bg-[#7fcc2a] shadow-md p-1 px-2 rounded-md text-gray-200 font-bold ">
                {selectedAnimal.diet1}
              </span>
              <span className="bg-[#7fcc2a]  shadow-md p-1 px-2 rounded-md text-gray-200 font-bold ">
                {selectedAnimal.diet2}
              </span>
              <span className="bg-[#7fcc2a]  shadow-md p-1 px-2 rounded-md text-gray-200 font-bold ">
                {selectedAnimal.diet3}
              </span>
            </div>
            <div>
              <h3 className="bg-gray-100 p-3 shadow-md text-xl font-semibold text-gray-500 w-[450px] mb-5 rounded-md">
                {selectedAnimal.habitat}
              </h3>
            </div>
            <div className="shadow-md outline-none">
              <h3 className="bg-gray-200 p-3 text-xl font-semibold text-gray-500  rounded-md">
                {" "}
                <span className="text-[#385013] font-bold text-xl ">
                  Lift Span :{" "}
                </span>
                {selectedAnimal.lifespan}
              </h3>
            </div>
            <div className="flex items-start  justify-start gap-5 py-6">
              <span className="bg-[#7fcc2a] shadow-md p-1 px-2 rounded-md text-gray-200 font-bold ">
                {selectedAnimal.types1}
              </span>
              <span className="bg-[#7fcc2a] shadow-md p-1 px-2 rounded-md text-gray-200 font-bold ">
                {selectedAnimal.types2}
              </span>
              <span className="bg-[#7fcc2a] shadow-md p-1 px-2 rounded-md text-gray-200 font-bold ">
                {selectedAnimal.types3}
              </span>
            </div>
            <div className="p-2 mb-3 shadow-md rounded-md bg-gray-200 ">
              <h1 className="text-2xl font-bold text-[#385013]">Uses :</h1>
              <p className="text-lg mt-2 font-semibold text-gray-600">
                {selectedAnimal.uses}
              </p>
            </div>
            <div className="p-2 shadow-md rounded-md bg-gray-200 ">
              <h1 className="text-2xl font-bold text-[#385013]">description: :</h1>
              <p className="text-lg mt-2 font-semibold text-gray-600">
                {selectedAnimal.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AnimalDetailPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    diet: PropTypes.string.isRequired,
    habitat: PropTypes.string.isRequired,
    lifespan: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    uses: PropTypes.string.isRequired,
    characteristics: PropTypes.string.isRequired,
    historicalFacts: PropTypes.string.isRequired,
    imgdetail: PropTypes.string.isRequired,
  }).isRequired,
};

export default AnimalDetailPage;
