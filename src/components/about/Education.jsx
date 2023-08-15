import "./education.css"


function Education() {
    return  <table className="table">
        <thead>
            <tr>
                <th>Jenjang</th>
                <th>Jurusan</th>
                <th>IPK/NILAI</th>
                <th>institusi</th>
                <th>Tahun</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Diploma 3</td>
                <td>Sistem Informasi</td>
                <td>3.88/4.00</td>
                <td>Universitas Bina Sarana Informatika</td>
                <td>2020 - 2023</td>
            </tr>
            <tr>
                <td>SMK</td>
                <td>TAV</td>
                <td>88/100</td>
                <td>SMK YPT Tegal</td>
                <td>2018 - 2020</td>
            </tr>
        </tbody>
    </table>
}

export default Education