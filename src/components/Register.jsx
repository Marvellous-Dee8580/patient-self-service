import React, { useState } from 'react';
import './Register.css';
import logo from '../assets/logoFav.png';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const Register = () => {
  const [formData, setFormData] = useState({
    isNewPatient: '',
    regType: '',
    oldHospitalNo: '',
    firstName: '',
    middleName: '',
    surname: '',
    email: '',
    idType: '',
    idNo: '',
    gender: '',
    maritalStatus: '',
    religion: '',
    dob: '',
    homeTown: '',
    tribe: '',
    ethnicGroup: '',
    nationality: '',
    stateOfOrigin: '',
    address: '',
    phoneNumber: '',
    occupation: '',
    employeeName: '',
    employeePhone: '',
    nextOfKin: '',
    relationship: '',
    nokAddress: '',
    nokPhone: '',
    husbandName: '',
    husbandOccupation: '',
  });

  const [availableStates, setAvailableStates] = useState([]);

  const countriesWithStates = {
    Algeria: [
      'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 
      'Béjaïa', 'Biskra', 'Béchar', 'Tamanrasset', 'Tébessa', 
      'Tizi Ouzou', 'Algiers', 'El Oued', 'Khenchela', 'Sétif', 
      'Saïda', 'Souk Ahras', 'Médéa', 'Mostaganem', 'Tissemsilt', 
      'El Tarf', 'Tindouf', 'Tissemsilt', 'Ghardaïa', 'Relizane'
    ],
    Angola: [
      'Luanda', 'Benguela', 'Huíla', 'Namibe', 
      'Cuanza Norte', 'Cuanza Sul', 'Malanje', 'Lunda Norte', 
      'Lunda Sul', 'Zaire', 'Bengo', 'Uíge', 'Cunene', 'Cuando Cubango'
    ],
    Benin: [
      'Atlantique', 'Littoral', 'Ouémé', 'Plateau', 
      'Zou', 'Collines', 'Donga', 'Couffo', 'Mono', 'Atakora'
    ],
    Botswana: [
      'Gaborone', 'Francistown', 'Molepolole', 'Maun', 
      'Kasane', 'Jwaneng', 'Selibe Phikwe', 'Letlhakane'
    ],
    BurkinaFaso: [
      'Boucle du Mouhoun', 'Cascades', 'Centre', 'Centre-Est', 
      'Centre-Nord', 'Centre-Ouest', 'Est', 'Nord', 'Sahel', 'Sud-Ouest'
    ],
    Burundi: [
      'Bubanza', 'Bujumbura Mairie', 'Bujumbura Rural', 'Cibitoke', 
      'Gitega', 'Karusi', 'Kayanza', 'Kirundo', 'Makamba', 
      'Muramvya', 'Muyinga', 'Ngozi', 'Rumonge', 'Rutana', 'Mwaro'
    ],
    CaboVerde: [
      'Santiago', 'São Vicente', 'Sal', 'Boa Vista', 
      'Sao Nicolau', 'Brava', 'Fogo', ' Maio'
    ],
    Cameroon: [
      'Littoral', 'West', 'Southwest', 'Northwest', 
      'North', 'Far North', 'Centre', 'South', 'East'
    ],
    CentralAfricanRepublic: [
      'Bamingui-Bangoran', 'Haut-Mbomou', 'Mbomou', 'Sangha-Mbaéré', 
      'Ombella-Mpoko', 'Basse-Kotto', 'Kémo', 'Ouaka', 
      'Haute-Kotto', 'Nana-Mambéré', 'Nana-Grébizi', 'Vakaga'
    ],
    Chad: [
      'Batha', 'Borkou', 'Chari-Baguirmi', 'Guéra', 
      'Hadjer-Lamis', 'Lac', 'Logone Occidental', 'Logone Oriental', 
      'Mandoul', 'Mayo-Kebbi Est', 'Mayo-Kebbi Ouest', 'Ouaddaï', 
      'Sila', 'Tandjilé', 'Tchad', 'Wadi Fira'
    ],
    Comoros: [
      'Grande Comore', 'Anjouan', 'Mohéli'
    ],
    DemocraticRepublicofCongo: [
      'Bas-Uele', 'Haut-Uele', 'Ituri', 'Tshuapa', 
      'Haut-Lomami', 'Lualaba', 'Katanga', 'Tanganyika', 
      'Sud-Kivu', 'Maniema', 'North Kivu', 'Kinshasa', 'Kwango', 
      'Kwanza', 'Tshuapa', 'Sankuru', 'Kasai', 'Kasai Oriental'
    ],
    RepublicofCongo: [
      'Bouenza', 'Kouilou', 'Niari', 'Lékoumou', 
      'Sangha', 'Plateaux', 'Likouala', 'Pool', 'Brazzaville'
    ],
    Djibouti: [
      'Ali Sabieh', 'Dikhil', 'Djibouti', 'Obock', 'Tadjourah'
    ],
    Egypt: [
      'Cairo', 'Alexandria', 'Giza', 'Luxor', 
      'Aswan', 'Red Sea', 'Matrouh', 'Qena', 
      'Suez', 'Dakahlia', 'Kafr El Sheikh', 'Dumyat', 'Port Said', 
      'Ismailia', 'Sharqia', 'Beheira', 'Fayoum', 'Minya', 
      'Beni Suef', 'Assiut', 'Sohag', 'Qalyubia'
    ],
    EquatorialGuinea: [
      'Bioko Norte', 'Bioko Sur', 'Centro Sur', 'Djibloho', 
      'Kié-Ntem', 'Litoral', 'Wele-Nzas', 'Annobón'
    ],
    Eritrea: [
      'Anseba', 'Debub', 'Gash-Barka', 'Maekel', 
      'Semien Keih Bahri', 'Debubawi Keyih Bahri', 'Gash-Barka'
    ],
    Eswatini: [
      'Hhohho', 'Lubombo', 'Manzini', 'Shiselweni'
    ],
    Ethiopia: [
      'Addis Ababa', 'Afar', 'Amhara', 'Oromia', 
      'Somali', 'Southern Nations, Nationalities, and Peoples’ Region', 
      'Tigray', 'Dire Dawa', 'Gambela', 'Harari', 'Benishangul-Gumuz'
    ],
    Gabon: [
      'Estuaire', 'Haut-Ogooué', 'Moyen-Ogooué', 
      'Ngounié', 'Nyanga', 'Ogooué-Lolo', 'Ogooué-Maritime', 
      'Woleu-Ntem'
    ],
    Gambia: [
      'Banjul', 'Kombos', 'Lower River', 'Central River', 
      'Upper River', 'North Bank'
    ],
    Ghana: [
      'Greater Accra', 'Ashanti', 'Western', 'Eastern', 
      'Northern', 'Central', 'Volta', 'Upper East', 'Upper West'
    ],
    Guinea: [
      'Boké', 'Faranah', 'Kankan', 'Kindia', 
      'Labé', 'Mamou', 'Nzérékoré', 'Conakry', 'Télémélé'
    ],
    GuineaBissau: [
      'Bissau', 'Biombo', 'Bolama', 'Cacheu', 
      'Gabu', 'Oio', 'Quinara', 'Tombali'
    ],
    IvoryCoast: [
      'Abidjan', 'Yamoussoukro', 'Bouaké', 'Korhogo', 
      'San Pedro', 'Daloa', 'Man'
    ],
    Kenya: [
      'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 
      'Eldoret', 'Nyeri', 'Meru', 'Nairobi', 'Kajiado', 
      'Machakos', 'Embu', 'Kirinyaga', 'Nyandarua', 'Laikipia', 
      'Nandi', 'Bomet', 'Kericho', 'Uasin Gishu'
    ],
    Lesotho: [
      'Maseru', 'Berea', 'Leribe', 'Mokhotlong', 
      'Qacha’s Nek', 'Quthing', 'Thaba-Tseka', 'Mohale’s Hoek'
    ],
    Liberia: [
      'Bong', 'Grand Bassa', 'Lofa', 'Margibi', 
      'Montserrado', 'Nimba', 'River Cess', 'River Gee', 
      'Sinoe', 'Grand Cape Mount', 'Gbarpolu', 'Grand Kru'
    ],
    Libya: [
      'Al Fatih', 'Al Jufrah', 'Al Marqab', 'Al Wahat', 
      'Azzawiyah', 'Benghazi', 'Darnah', 'Ghadames', 
      'Jabal al Gharbi', 'Kufra', 'Murzuq', 'Sebha', 
      'Tarhunah', 'Zintan', 'Zawiya'
    ],
    Madagascar: [
      'Antananarivo', 'Antsiranana', 'Fianarantsoa', 
      'Mahajanga', 'Toamasina', 'Toliara'
    ],
    Malawi: [
      'Lilongwe', 'Blantyre', 'Mzuzu', 'Zomba', 
      'Mangochi', 'Karonga', 'Nkhotakota', 'Kasungu'
    ],
    Mali: [
      'Bamako', 'Kayes', 'Koulikoro', 'Sikasso', 
      'Ségou', 'Mopti', 'Tombouctou', 'Gao', 'Kidal'
    ],
    Mauritania: [
      'Adrar', 'Assaba', 'Brakna', 'Gorgol', 
      'Guidimaka', 'Hodh El Gharbi', 'Hodh El Chargui', 
      'Trarza', 'Inchiri', 'Tiris Zemmour'
    ],
    Mauritius: [
      'Port Louis', 'Black River', 'Flacq', 'Grand Port', 
      'Moka', 'Pamplemousses', 'Savanne', 'Rivière du Rempart'
    ],
    Morocco: [
      'Agadir', 'Casablanca', 'Fes', 'Marrakesh', 
      'Meknes', 'Rabat', 'Tangier', 'Taza', 
      'Kenitra', 'Settat', 'Souss-Massa'
    ],
    Mozambique: [
      'Maputo', 'Gaza', 'Inhambane', 'Sofala', 
      'Manica', 'Tete', 'Zambezia', 'Nampula', 
      'Niassa', 'Cabo Delgado', 'Maputo City'
    ],
    Namibia: [
      'Erongo', 'Hardap', 'Karas', 'Kavango East', 
      'Kavango West', 'Khomas', 'Otjozondjupa', 'Omusati', 
      'Oshana', 'Oshikoto', 'Zambezi', 'Kunene'
    ],
    Niger: [
      'Agadez', 'Diffa', 'Dosso', 'Maradi', 
      'Niamey', 'Tillabéri', 'Zinder', 'Tahoua', 'Say'
    ],
    Nigeria: [
      'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 
      'Bauchi', 'Bayelsa', 'Benue', 'Borno', 
      'Cross River', 'Delta', 'Ebonyi', 'Edo', 
      'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 
      'Kaduna', 'Kano', 'Kogi', 'Kwara', 'Lagos', 
      'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 
      'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 
      'Yobe', 'Zamfara'
    ],
    Rwanda: [
      'Kigali', 'Eastern Province', 'Northern Province', 
      'Southern Province', 'Western Province'
    ],
    SãoToméandPríncipe: [
      'São Tomé', 'Príncipe'
    ],
    Senegal: [
      'Dakar', 'Diourbel', 'Fatick', 'Kaolack', 
      'Kaffrine', 'Kolda', 'Louga', 'Matam', 
      'Sedhiou', 'Tambacounda', 'Ziguinchor'
    ],
    Seychelles: [
      'Anse Boileau', 'Anse Etoile', 'Beau Vallon', 
      'Bel Ombre', 'Bel Air', 'English River', 
      'Mont Fleuri', 'Pointe Larue', 'Saint Louis', 
      'Takamaka'
    ],
    SierraLeone: [
      'Western Area', 'Northern Province', 'Southern Province', 
      'Eastern Province'
    ],
    Somalia: [
      'Awdal', 'Bakool', 'Banaadir', 'Bari', 
      'Galgaduud', 'Gedo', 'Hirshabelle', 'Mudug', 
      'Nugaal', 'South West', 'Somaliland', 'Galmudug', 'Jubaland'
    ],
    SouthAfrica: [
      'Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 
      'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape', 'Western Cape'
    ],
    SouthSudan: [
      'Central Equatoria', 'Eastern Equatoria', 'Jonglei', 
      'Lakes', 'Northern Bahr el Ghazal', 'Unity', 
      'Western Bahr el Ghazal', 'Western Equatoria', 'Upper Nile'
    ],
    Sudan: [
      'Al Awser', 'Al Baḩr al Aḩmar', 'Al Jazirah', 
      'Al Kharṭūm', 'Al Qadarif', 'Al Wāḥidah', 
      'Northern', 'Southern Kordofan', 'White Nile'
    ],
    Tanzania: [
      'Arusha', 'Dodoma', 'Dar es Salaam', 'Geita', 
      'Kagera', 'Katavi', 'Kigoma', 'Kilimanjar', 
      'Lindi', 'Manyara', 'Mbeya', 'Morogoro', 
      'Mwanza', 'Pwani', 'Rukwa', 'Ruvuma', 
      'Shinyanga', 'Singida', 'Tabora', 'Tanga'
    ],
    Togo: [
      'Centrale', 'Kara', 'Maritime', 'Plateau', 'Savanes'
    ],
    Tunisia: [
      'Ariana', 'Beja', 'Ben Arous', 'Bizerte', 
      'Gabès', 'Gafsa', 'Jendouba', 'Kairouan', 
      'Kasserine', 'Kébili', 'Manouba', 'Medenine', 
      'Monastir', 'Nabeul', 'Sfax', 'Sousse', 'Tataouine', 
      'Tozeur', 'Zaghouan'
    ],
    Uganda: [
      'Central Region', 'Eastern Region', 'Northern Region', 
      'Western Region', 'Karamoja', 'Buganda', 'Busoga', 
      'West Nile', 'Rwenzori', 'Lango', 'Acholi', 'Kigezi', 
      'Teso', 'Ankole'
    ],
    Zambia: [
      'Central', 'Copperbelt', 'Eastern', 'Luapula', 
      'Lusaka', 'Northern', 'North Western', 'Southern', 'Western'
    ],
    Zimbabwe: [
      'Harare', 'Bulawayo', 'Manicaland', 'Mashonaland East', 
      'Mashonaland West', 'Masvingo', 'Midlands', 
      'Matabeleland North', 'Matabeleland South'
    ]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'nationality') {
      // Set states based on selected country
      setAvailableStates(countriesWithStates[value] || []);
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        stateOfOrigin: '', // Reset state of origin when the country changes
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    generatePDF();
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const img = new Image();
    img.src = logo;

    doc.addImage(img, 'PNG', 10, 10, 30, 30);
    doc.setFontSize(18);
    doc.text('Federal Medical Centre, Abuja', 50, 20);
    doc.setFontSize(14);
    doc.text('Patient Index Form', 50, 30);

    doc.setLineWidth(0.5);
    doc.line(10, 35, 200, 35);

    doc.autoTable({
      startY: 40,
      head: [['Field', 'Value']],
      body: Object.entries(formData).map(([key, value]) => [key, value]),
    });
    doc.save('Patient_Index_Form.pdf');
  };

  return (
    <div className="form-container">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Federal Medical Centre, Abuja</h2>
      <h3>Patient Index Form</h3>
      <form onSubmit={handleSubmit} className="patient-form">
        {/* New Patient Radio Button */}
        {/* <div className="form-row">
          <div className="form-group">
            <label>Are you a new patient?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="isNewPatient"
                  value="Yes"
                  onChange={handleChange}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isNewPatient"
                  value="No"
                  onChange={handleChange}
                />{' '}
                No
              </label>
            </div>
          </div>
        </div> */}

        {/* Registration Type and Old Hospital Number */}
        <div className="form-row">
          <div className="form-group">
            <label>Registration Type:</label>
            <select name="regType" onChange={handleChange}>
              <option value="">Select</option>
              <option value="Normal">Normal</option>
              <option value="NHIS">NHIS</option>
              <option value="Retainership">Retainership</option>
            </select>
          </div>
          <div className="form-group">
            <label>Old Hospital No.:</label>
            <input type="text" name="oldHospitalNo" onChange={handleChange} />
          </div>
        </div>

        {/* Name Fields */}
        <div className="form-row">
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Middle Name:</label>
            <input type="text" name="middleName" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Surname:</label>
            <input type="text" name="surname" onChange={handleChange} />
          </div>
        </div>

        {/* Email and Phone Number */}
        <div className="form-row">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="text" name="phoneNumber" onChange={handleChange} />
          </div>
        </div>

        {/* ID Type and ID Number */}
        <div className="form-row">
          <div className="form-group">
            <label>ID Type:</label>
            <select name="idType" onChange={handleChange}>
              <option value="">Select</option>
              <option value="National ID">National ID</option>
              <option value="Voter's Card">Voter's Card</option>
              <option value="Driver's License">Driver's License</option>
              <option value="International Passport">
                International Passport
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>ID No.:</label>
            <input type="text" name="idNo" onChange={handleChange} />
          </div>
        </div>

        {/* Gender and Marital Status */}
        <div className="form-row">
          <div className="form-group">
            <label>Gender:</label>
            <select name="gender" onChange={handleChange}>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Marital Status:</label>
            <select name="maritalStatus" onChange={handleChange}>
              <option value="">Select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>
        </div>

        {/* Religion and Date of Birth */}
        <div className="form-row">
          <div className="form-group">
            <label>Religion:</label>
            <select name="religion" onChange={handleChange}>
              <option value="">Select</option>
              <option value="Christianity">Christianity</option>
              <option value="Islam">Islam</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date" name="dob" onChange={handleChange} />
          </div>
        </div>

        {/* Home Town and Tribe */}
        <div className="form-row">
          <div className="form-group">
            <label>Home Town:</label>
            <input type="text" name="homeTown" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Tribe:</label>
            <input type="text" name="tribe" onChange={handleChange} />
          </div>
        </div>

        {/* Nationality and State of Origin */}
        <div className="form-row">
          <div className="form-group">
            <label>Nationality:</label>
            <select name="nationality" value={formData.nationality} onChange={handleChange}>
              <option value="">Select</option>
              {Object.keys(countriesWithStates).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>State of Origin:</label>
            <select
              name="stateOfOrigin"
              value={formData.stateOfOrigin}
              onChange={handleChange}
              disabled={!availableStates.length}
            >
              <option value="">Select</option>
              {availableStates.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* State of Origin and Address */}
        <div className="form-row">
          <div className="form-group">
            <label>Ethnic Group:</label>
            <input type="text" name="ethnicGroup" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input type="text" name="address" onChange={handleChange} />
          </div>
        </div>

        {/* Occupation and Employee Name */}
        <div className="form-row">
          <div className="form-group">
            <label>Occupation:</label>
            <input type="text" name="occupation" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Employee Name:</label>
            <input type="text" name="employeeName" onChange={handleChange} />
          </div>
        </div>

        {/* Employee Phone and Husband's Name */}
        <div className="form-row">
          <div className="form-group">
            <label>Employee Phone Number:</label>
            <input type="text" name="employeePhone" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Husband's Name:</label>
            <input type="text" name="husbandName" onChange={handleChange} />
          </div>
        </div>

        {/* Husband's Occupation and Next of Kin */}
        <div className="form-row">
          <div className="form-group">
            <label>Husband's Occupation:</label>
            <input type="text" name="husbandOccupation" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Next of Kin:</label>
            <input type="text" name="nextOfKin" onChange={handleChange} />
          </div>
        </div>

        {/* Relationship and Next of Kin's Phone */}
        <div className="form-row">
          <div className="form-group">
            <label>Relationship:</label>
            <select name="relationship" onChange={handleChange}>
              <option value="">Select</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Sibling">Sibling</option>
              <option value="Spouse">Spouse</option>
              <option value="Guardian">Guardian</option>
              <option value="Friend">Friend</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Next of Kin's Phone Number:</label>
            <input type="text" name="nokPhone" onChange={handleChange} />
          </div>
        </div>

        {/* Next of Kin's Address */}
        <div className="form-row">
          <div className="form-group">
            <label>Next of Kin's Address:</label>
            <input type="text" name="nokAddress" onChange={handleChange} />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;