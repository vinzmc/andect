//dependency
import React from 'react';
import { useParams } from 'react-router';

//component
import Footer from '../components/footer';
import Header from '../components/header';

//data
import rulesResult from '../data/rules'

export default function Result() {
    const { params } = useParams();
    const result = rulesResult(params);
    const linkGForm = 'https://docs.google.com/forms/d/e/1FAIpQLSdNYbBHHLo7FLqu_x6YcT05-DopsjynsGp-xKSZ7Zv4si-qQw/viewform';

    const heading = "Halaman Hasil Deteksi";
    const subHeading = "Hasil Test";
    const contentHeading = "Hasil test ini merupakan hasil dari test skreening berdasarkan jawaban yang anda berikan pada test sebelumnya";

    function saveHasil() {
        navigator.clipboard.writeText(window.location.href);
    }

    return (
        <main className="flex flex-col h-full">
            <Header heading={heading} subHeading={subHeading} contentHeading={contentHeading} />
            <div className="container content-center mx-auto">
                <div className="lg:w-1/2 mx-auto">
                    {/* Card 1 */}
                    <div className="container content-center mx-auto p-4">
                        <div className="p-4 m-5 bg-white rounded-xl shadow-md">
                            <div className="p-2">
                                <div className="lg:text-2xl text-lg font-medium text-black">Hasil deteksi gangguan kecemasan</div>
                            </div>
                            {result.map((value, i) => {
                                return (
                                    <div key={i}>
                                        <div className="flex items-center space-x-4 p-1">
                                            <div className="flex-shrink-0 content-start">
                                                <span className="text-center align-middle">&#9866;</span>
                                            </div>
                                            <div>
                                                <p className="text-gray-700 text-justify lg:text-lg">
                                                    {value}
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                );
                            })}
                            <div className="text-right">
                                
                                <button className=" bg-green-400 p-2 pl-4 pr-4 ml-4 mt-2 font-bold rounded-md transition duration-600 hover:bg-green-500 text-white" onClick={() => saveHasil()}>
                                    Save
                                </button>
                                <div className="text-xs text-gray-500 pr-2">copy link to clipboard*</div>
                            </div>
                        </div>
                        <div className="lg:mb-10">
                            <div className="font-bold text-center lg:text-2xl p-4">
                                Apa yang bisa anda lakukan dengan hasil ini?
                            </div>
                            <div className="text-justify text-gray-500 lg:text-xl">
                                Hasil dari test ini merupakan hasil test screening yang bertujuan untuk mendeteksi potensi adanya gangguan kecemasan yang mungkin dimiliki oleh seseorang, sehingga untuk mendapatkan hasil diagnosis sesungguhnya diperlukan konsultasi dan pengujian lebih lanjut oleh dokter ataupun psikolog.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 flex flex-1">
                <div className="container p-5 text-center m-auto flex-1">
                    <div className="text-center">
                        <p className="font-medium lg:text-3xl text-xl text-yellow-500 p-6">Berikan feedback pada website ini!</p>
                        <button className=" bg-yellow-500 p-3 lg:w-1/6 lg:text-xl font-bold rounded-md transition duration-500 hover:bg-yellow-600 text-white" onClick={() => window.open(linkGForm, '_blank')}>
                            Feedback
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}