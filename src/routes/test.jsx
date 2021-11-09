//dependency
import React from 'react';
import { useForm } from 'react-hook-form';

//component
import Footer from "../components/footer";
import Header from "../components/header";

// data
import { knowledge } from '../data/knowledge';

export default function Test() {
  const heading = "Test Gangguan Kecemasan";
  const subHeading = "23 Pertanyaan";
  const contentHeading = "Anda diharapkan untuk menjawab dengan jujur sesuai dengan kondisi ataupun keadaan sesungguhnya yang anda alami saaat ini ketika menjawab pertanyaan didalam test ini.";

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const arr = Object.values(data);
    console.log(arr);
  };
  console.log((errors));

  return (
    <main className="flex flex-col h-full">
      <Header heading={heading} subHeading={subHeading} contentHeading={contentHeading} />

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Daftar Pertanyaan */}
        {knowledge.soal.map((value, i) => {
          return (
            <div className="p-2 pl-24 pr-24 even:bg-gray-50" key={i}>
              <div className="container mx-auto w-3/4">
                <p className="text-xl font-bold text-gray-800 m-2 p-2">
                  Pertanyaan {i + 1}/{knowledge.totalSoal}
                </p>
                <div className={`border-2 rounded shadow-sm p-4 m-2 hover:bg-blue-50 ${errors[value.id] ? "border-red-500" : ""}`}>
                  <p className="text-lg font-semibold mb-1">{value.pertanyaan}</p>
                  {value.pilihan.map((pilihan, j) => {
                    return (
                      <div className="p-1" key={j}>
                        <label className="inline-flex items-center cursor-pointer">
                          <input className="cursor-pointer" {...register(value.id, { required: true })} type="radio" value={pilihan} />
                          <span className="ml-2">{pilihan}</span>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        {/* Konten terakhir */}
        <div className="p-2 pl-24 pr-24 flex-1 even:bg-gray-50">
          <div className="container mx-auto w-3/4">
            <div className="p-2 m-2">
              <input className="p-2 rounded bg-green-500 active:bg-green-700 text-white font-semibold cursor-pointer" type="submit" value="Cek hasil test" />
            </div>
          </div>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </main>
  );
}