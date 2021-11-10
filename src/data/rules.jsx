export default function rulesResult(arr) {
    let result = [];
    const hasil = [
        'Gangguan Obsesif Kompulsif',
        'Gangguan Kecemasan Umum',
        'Fobia Spesifik',
        'Fobia Sosial',
        'Gangguan Panik dengan Agorafobia',
        'Gangguan Panik tanpa Agorafobia',
        'Agorafobia tanpa Gangguan Panik',
        'Gangguan Kecemasan Lain'
    ]
    let i = 0;

    //1
    if (arr[i++] === '1') {
        //2 3 4 5
        if (arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1') {
            result.push(hasil[0]);
        }

        //6 7 8 9
        i = 5;
        if (arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1') {
            result.push(hasil[1]);
        }

        //10 11 12 13
        i = 9;
        if (arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1') {
            result.push(hasil[2]);
        }

        //14 15
        i = 13;
        if (arr[i++] === '1' && arr[i++] === '1') {
            result.push(hasil[3]);
        }

        //16 17 18
        i = 15;
        if (arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1') {
            //19 
            if (arr[i++] === '1') {
                //Agoraphobia & panik
                result.push(hasil[4]);
            } else {
                //panik tanpa agoraphobia
                result.push(hasil[5]);
            }
        }

        //20 21 22 23 Agoraphobia
        i = 19;
        if (arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1' && arr[i++] === '1') {
            if (result.find(element => element === hasil[4])) {
                //do nothing (sudah mencakup 2 2nya)
            } else if (result.find(element => element === hasil[5])) {
                //ubah menjadi agoraphobia dan panik
                result[result.length - 1] = hasil[4];
            } else {
                //agoraphobia
                result.push(hasil[6]);
            }
        }

        if (result.length === 0) {
            result.push(hasil[7]);
        }
    }

    if (result.length === 0) {
        //agar output sama
        result.push('Tidak terdeteksi adanya gangguan kecemasan.');
    }

    return result;
}