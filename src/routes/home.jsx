//dependency
import { NavLink } from 'react-router-dom';

//components
import Footer from '../components/footer'

//assets
import question from '../assets/question.svg'
import clock from '../assets/clock.svg'
import list from '../assets/list.svg'


export default function Home() {
    return (
        <main className="flex flex-col h-full">
            {/* header */}
            <div className="bg-gray-100 h-52">
                <div className="container content-center mx-auto p-2">
                    <div className="pl-6">
                        <p className="font-semibold text-3xl text-yellow-500 text-center pt-3">Deteksi Gangguan Kecemasan</p>
                        <p className="font-semibold text-l text-gray-400 text-center pb-3">Deteksi berdasarkan serangkaian pertanyaan singkat</p>
                        <p className="text-gray-600 pt-1 pb-3 text-xl text-justify w-4/6 mx-auto">
                            Andect adalah sebuah sistem pakar yang berguna untuk mendeteksi gangguan kecemasan yang berpotensi dimiliki oleh anda berdasarkan serangkaian pertanyaan yang telah dikonsultasikan dengan para ahli.
                        </p>
                    </div>
                </div>
            </div>
            <hr />  {/* batas antara header dengan content*/}

            {/* content 1 */}
            <div>
                <div className="container content-center mx-auto">
                    <div className="w-1/2 mx-auto">
                        {/* Card 1 */}
                        <div className="container content-center mx-auto p-6">
                            <div className="p-6 max-w-2xl bg-white rounded-xl shadow-md flex items-center space-x-4 transition hover:bg-gray-50 transform hover:scale-105 duration-500">
                                <div className="flex-shrink-0 content-start">
                                    <img className="h-12 w-12 col fill-current text-black" src={question} alt="question logo" />
                                </div>
                                <div>
                                    <div className="text-xl font-medium text-black">Apa itu gangguan kecemasan?</div>
                                    <p className="text-gray-500 text-justify">
                                        Gangguan kecemasan umum adalah munculnya rasa cemas atau khawatir yang berlebihan dan tidak terkendali terhadap berbagai hal dan kondisi. Kondisi ini akan mengganggu aktivitas sehari-hari penderitanya.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="container content-center mx-auto p-6 flex flex-row-reverse">
                            <div className="p-6 max-w-2xl bg-white rounded-xl shadow-md flex space-x-4 w-full transition hover:bg-gray-50 transform hover:scale-105 duration-500">
                                <div className="flex-shrink-0">
                                    <img className="h-12 w-12 col fill-current text-black" src={clock} alt="question logo" />
                                </div>
                                <div>
                                    <div className="text-xl font-medium text-black">Mengapa menggunakan ANDECT?</div>
                                    <p className="text-gray-500 text-justify">
                                        ANDECT cepat dan mudah untuk digunakan, dengan menggunakan ANDECT, anda dapat melakukan test screening untuk mendeteksi potensi gangguan kecemasan yang mungkin anda miliki.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="container content-center mx-auto p-6 ">
                            <div className="p-6 max-w-2xl bg-white rounded-xl shadow-md flex items-center space-x-4 transition hover:bg-gray-50 transform hover:scale-105 duration-500">
                                <div className="flex-shrink-0">
                                    <img className="h-12 w-12 col fill-current text-black" src={list} alt="question logo" />
                                </div>
                                <div>
                                    <div className="text-xl font-medium text-black">Bagaimana cara kerja ANDECT?</div>
                                    <p className="text-gray-500 text-justify">
                                        ANDECT bekerja dengan cara mengolah jawaban dari test yang anda berikan kepada sistem, dimana jawaban tersebut diolah dengan algoritma forward chaining sehingga dapat memberikan hasil yang sesuai.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* content 2 */}
            <div className="bg-gray-50 flex-1 flex">
                <div className="container p-5 text-center m-auto flex-1">
                    <NavLink to="/andect/test">
                        <button className=" bg-yellow-300 p-3 font-semibold rounded-md m-2 transition duration-500 hover:bg-yellow-400">
                            Halaman Test
                        </button>
                    </NavLink>
                    <p className="animate-pulse font-medium text-xl text-yellow-500 ">Test Sekarang!</p>
                    <p className="text-gray-500 text-xs">Hanya 10 menit</p>
                </div>
            </div>

            {/* footer */}
            <Footer />
        </main>
    );
}