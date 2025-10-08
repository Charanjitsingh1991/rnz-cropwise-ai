// Comprehensive location data for RNZ CropWise Pilot Countries
export interface PilotLocation {
  code: string;
  name: string;
  cities?: string[];
}

export interface PilotCountry {
  code: string;
  name: string;
  states: PilotLocation[];
}

export const pilotCountriesData: PilotCountry[] = [
  {
    code: 'IN',
    name: 'India',
    states: [
      // All 28 States
      { code: 'AP', name: 'Andhra Pradesh', cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Anantapur', 'Kadapa', 'Chittoor', 'Srikakulam', 'Vizianagaram'] },
      { code: 'AR', name: 'Arunachal Pradesh', cities: ['Itanagar', 'Naharlagun', 'Pasighat', 'Bomdila', 'Tawang', 'Ziro', 'Along', 'Tezu', 'Roing', 'Daporijo'] },
      { code: 'AS', name: 'Assam', cities: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon', 'Dhubri', 'Sivasagar'] },
      { code: 'BR', name: 'Bihar', cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Arrah', 'Begusarai', 'Katihar', 'Chhapra'] },
      { code: 'CT', name: 'Chhattisgarh', cities: ['Raipur', 'Bhilai', 'Korba', 'Bilaspur', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Ambikapur', 'Chirmiri', 'Bilaspur'] },
      { code: 'GA', name: 'Goa', cities: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Mormugao', 'Bicholim', 'Valpoi', 'Sanquelim', 'Curchorem'] },
      { code: 'GJ', name: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Anand', 'Bharuch', 'Gandhinagar', 'Junagadh'] },
      { code: 'HR', name: 'Haryana', cities: ['Gurgaon', 'Faridabad', 'Panipat', 'Yamunanagar', 'Rohtak', 'Hisar', 'Karnal', 'Sonipat', 'Ambala', 'Bhiwani'] },
      { code: 'HP', name: 'Himachal Pradesh', cities: ['Shimla', 'Mandi', 'Solan', 'Kullu', 'Dharamshala', 'Bilaspur', 'Una', 'Hamirpur', 'Chamba', 'Kangra'] },
      { code: 'JH', name: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh', 'Medininagar', 'Chatra'] },
      { code: 'KA', name: 'Karnataka', cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga', 'Davangere', 'Bellary', 'Bijapur', 'Shimoga'] },
      { code: 'KL', name: 'Kerala', cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Alappuzha', 'Palakkad', 'Malappuram', 'Kannur', 'Kottayam'] },
      { code: 'MP', name: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas', 'Satna', 'Ratlam', 'Rewa'] },
      { code: 'MH', name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Kolhapur', 'Amravati', 'Nanded'] },
      { code: 'MN', name: 'Manipur', cities: ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur', 'Ukhrul', 'Senapati', 'Tamenglong', 'Chandel', 'Jiribam', 'Kakching'] },
      { code: 'ML', name: 'Meghalaya', cities: ['Shillong', 'Tura', 'Jowai', 'Nongstoin', 'Williamnagar', 'Baghmara', 'Nongpoh', 'Mairang', 'Resubelpara', 'Ampati'] },
      { code: 'MZ', name: 'Mizoram', cities: ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Kolasib', 'Serchhip', 'Lawngtlai', 'Mamit', 'Saitual', 'Khawzawl'] },
      { code: 'NL', name: 'Nagaland', cities: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Zunheboto', 'Phek', 'Mon', 'Longleng', 'Kiphire'] },
      { code: 'OR', name: 'Odisha', cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Brahmapur', 'Sambalpur', 'Puri', 'Balasore', 'Bhadrak', 'Baripada', 'Jharsuguda'] },
      { code: 'PB', name: 'Punjab', cities: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Hoshiarpur', 'Moga', 'Firozpur', 'Kapurthala'] },
      { code: 'RJ', name: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Sikar', 'Sri Ganganagar', 'Alwar', 'Bhilwara'] },
      { code: 'SK', name: 'Sikkim', cities: ['Gangtok', 'Namchi', 'Mangan', 'Gyalshing', 'Ravongla', 'Lachung', 'Pelling', 'Rangpo', 'Singtam', 'Jorethang'] },
      { code: 'TN', name: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Vellore', 'Erode', 'Tiruppur', 'Thoothukkudi', 'Dindigul'] },
      { code: 'TS', name: 'Telangana', cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Ramagundam', 'Khammam', 'Mahbubnagar', 'Nalgonda', 'Adilabad', 'Siddipet'] },
      { code: 'TR', name: 'Tripura', cities: ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailasahar', 'Belonia', 'Khowai', 'Teliamura', 'Ambassa', 'Sabroom', 'Kamalpur'] },
      { code: 'UP', name: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Varanasi', 'Prayagraj', 'Noida', 'Bareilly', 'Aligarh', 'Meerut'] },
      { code: 'UT', name: 'Uttarakhand', cities: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur', 'Kashipur', 'Rishikesh', 'Almora', 'Nainital', 'Pithoragarh'] },
      { code: 'WB', name: 'West Bengal', cities: ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Bardhaman', 'Malda', 'Baharampur', 'Habra', 'Kharagpur'] },
      
      // 8 Union Territories
      { code: 'AN', name: 'Andaman and Nicobar Islands', cities: ['Port Blair', 'Car Nicobar', 'Mayabunder', 'Diglipur', 'Rangat', 'Hut Bay', 'Campbell Bay', 'Neil Island', 'Havelock Island', 'Baratang'] },
      { code: 'CH', name: 'Chandigarh', cities: ['Chandigarh', 'Panchkula', 'Mohali', 'Zirakpur', 'Kharar', 'Kalka', 'Pinjore', 'Baddi', 'Nalagarh', 'Parwanoo'] },
      { code: 'DN', name: 'Dadra and Nagar Haveli and Daman and Diu', cities: ['Silvassa', 'Daman', 'Diu', 'Naroli', 'Amli', 'Dadra', 'Khanvel', 'Vapi', 'Umbergaon', 'Bilimora'] },
      { code: 'DL', name: 'Delhi', cities: ['New Delhi', 'Delhi Cantonment', 'Civil Lines', 'Connaught Place', 'Dwarka', 'Rohini', 'Pitampura', 'Janakpuri', 'Lajpat Nagar', 'Saket'] },
      { code: 'JK', name: 'Jammu and Kashmir', cities: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Udhampur', 'Kathua', 'Rajouri', 'Poonch', 'Doda', 'Kishtwar'] },
      { code: 'LA', name: 'Ladakh', cities: ['Leh', 'Kargil', 'Drass', 'Nubra Valley', 'Zanskar', 'Pangong Lake', 'Tso Moriri', 'Diskit', 'Hemis', 'Alchi'] },
      { code: 'LD', name: 'Lakshadweep', cities: ['Kavaratti', 'Agatti', 'Amini', 'Andrott', 'Kadmat', 'Kalpeni', 'Minicoy', 'Chetlat', 'Kiltan', 'Bitra'] },
      { code: 'PY', name: 'Puducherry', cities: ['Puducherry', 'Karaikal', 'Mahe', 'Yanam', 'Ozhukarai', 'Villianur', 'Bahour', 'Nettapakkam', 'Mannadipet', 'Ariyankuppam'] }
    ]
  },
  {
    code: 'PK',
    name: 'Pakistan',
    states: [
      // 4 Provinces
      { code: 'PB', name: 'Punjab', cities: ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala', 'Sialkot', 'Sargodha', 'Bahawalpur', 'Sahiwal', 'Jhang'] },
      { code: 'SD', name: 'Sindh', cities: ['Karachi', 'Hyderabad', 'Sukkur', 'Larkana', 'Nawabshah', 'Mirpur Khas', 'Shikarpur', 'Jacobabad', 'Dadu', 'Thatta'] },
      { code: 'KP', name: 'Khyber Pakhtunkhwa', cities: ['Peshawar', 'Mardan', 'Mingora', 'Kohat', 'Abbottabad', 'Dera Ismail Khan', 'Mansehra', 'Bannu', 'Swabi', 'Charsadda'] },
      { code: 'BL', name: 'Balochistan', cities: ['Quetta', 'Turbat', 'Khuzdar', 'Chaman', 'Hub', 'Gwadar', 'Loralai', 'Zhob', 'Sibi', 'Dera Bugti'] },
      
      // 2 Territories
      { code: 'GB', name: 'Gilgit-Baltistan', cities: ['Gilgit', 'Skardu', 'Chilas', 'Astore', 'Ghanche', 'Diamer', 'Hunza', 'Nagar', 'Shigar', 'Kharmang'] },
      { code: 'AJK', name: 'Azad Jammu and Kashmir', cities: ['Muzaffarabad', 'Mirpur', 'Rawalakot', 'Kotli', 'Bagh', 'Bhimber', 'Hattian Bala', 'Neelum', 'Haveli', 'Sudhnuti'] }
    ]
  },
  {
    code: 'LK',
    name: 'Sri Lanka',
    states: [
      { code: 'WP', name: 'Western Province', cities: ['Colombo', 'Gampaha', 'Kalutara', 'Moratuwa', 'Negombo', 'Wattala', 'Kelaniya', 'Panadura', 'Horana', 'Bandaragama'] },
      { code: 'CP', name: 'Central Province', cities: ['Kandy', 'Matale', 'Nuwara Eliya', 'Peradeniya', 'Gampola', 'Katugastota', 'Kundasale', 'Galagedara', 'Dambulla', 'Sigiriya'] },
      { code: 'SP', name: 'Southern Province', cities: ['Galle', 'Matara', 'Hambantota', 'Weligama', 'Ambalangoda', 'Hikkaduwa', 'Tangalle', 'Tissamaharama', 'Deniyaya', 'Akuressa'] },
      { code: 'NP', name: 'Northern Province', cities: ['Jaffna', 'Vavuniya', 'Kilinochchi', 'Mullaitivu', 'Point Pedro', 'Chavakachcheri', 'Kopay', 'Nallur', 'Tellippalai', 'Chankanai'] },
      { code: 'EP', name: 'Eastern Province', cities: ['Batticaloa', 'Trincomalee', 'Ampara', 'Kalmunai', 'Eravur', 'Kattankudy', 'Kandy', 'Dehiattakandiya', 'Akkaraipattu', 'Sammanthurai'] },
      { code: 'NWP', name: 'North Western Province', cities: ['Kurunegala', 'Puttalam', 'Chilaw', 'Kuliyapitiya', 'Polgahawela', 'Wennappuwa', 'Nattandiya', 'Madampe', 'Narammala', 'Bingiriya'] },
      { code: 'NCP', name: 'North Central Province', cities: ['Anuradhapura', 'Polonnaruwa', 'Medawachchiya', 'Tambuttegama', 'Kekirawa', 'Habarana', 'Galnewa', 'Kebithigollawa', 'Palugaswewa', 'Elahera'] },
      { code: 'UP', name: 'Uva Province', cities: ['Badulla', 'Monaragala', 'Bandarawela', 'Haputale', 'Welimada', 'Bibile', 'Wellawaya', 'Koslanda', 'Passara', 'Rideemaliyadda'] },
      { code: 'SAB', name: 'Sabaragamuwa Province', cities: ['Ratnapura', 'Kegalle', 'Embilipitiya', 'Balangoda', 'Kuruwita', 'Eheliyagoda', 'Mawanella', 'Warakapola', 'Rambukkana', 'Bulathkohupitiya'] }
    ]
  },
  {
    code: 'BD',
    name: 'Bangladesh',
    states: [
      { code: 'DH', name: 'Dhaka Division', cities: ['Dhaka', 'Gazipur', 'Narayanganj', 'Tangail', 'Narsingdi', 'Munshiganj', 'Rajbari', 'Madaripur', 'Gopalganj', 'Faridpur'] },
      { code: 'CT', name: 'Chittagong Division', cities: ['Chittagong', 'Comilla', 'Feni', 'Chandpur', 'Noakhali', 'Lakshmipur', 'Cox\'s Bazar', 'Bandarban', 'Rangamati', 'Khagrachari'] },
      { code: 'RJ', name: 'Rajshahi Division', cities: ['Rajshahi', 'Bogra', 'Pabna', 'Sirajganj', 'Natore', 'Naogaon', 'Chapainawabganj', 'Joypurhat', 'Godagari', 'Bagha'] },
      { code: 'KH', name: 'Khulna Division', cities: ['Khulna', 'Jessore', 'Satkhira', 'Magura', 'Jhenaidah', 'Bagerhat', 'Narail', 'Kushtia', 'Meherpur', 'Chuadanga'] },
      { code: 'BR', name: 'Barisal Division', cities: ['Barisal', 'Pirojpur', 'Patuakhali', 'Bhola', 'Barguna', 'Jhalokati', 'Banaripara', 'Nesarabad', 'Gournadi', 'Muladi'] },
      { code: 'SY', name: 'Sylhet Division', cities: ['Sylhet', 'Moulvibazar', 'Habiganj', 'Sunamganj', 'Beanibazar', 'Golapganj', 'Bishwanath', 'Balaganj', 'Companiganj', 'Fenchuganj'] },
      { code: 'RG', name: 'Rangpur Division', cities: ['Rangpur', 'Dinajpur', 'Kurigram', 'Gaibandha', 'Nilphamari', 'Panchagarh', 'Thakurgaon', 'Lalmonirhat', 'Pirgachha', 'Mithapukur'] },
      { code: 'MM', name: 'Mymensingh Division', cities: ['Mymensingh', 'Jamalpur', 'Sherpur', 'Netrokona', 'Fulbaria', 'Trishal', 'Gouripur', 'Ishwarganj', 'Nandail', 'Gaffargaon'] }
    ]
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    states: [
      { code: 'DU', name: 'Dubai', cities: ['Dubai', 'Jebel Ali', 'Al Barsha', 'Al Qusais', 'Al Karama', 'Deira', 'Bur Dubai', 'Jumeirah', 'Palm Jumeirah', 'Dubai Marina'] },
      { code: 'AB', name: 'Abu Dhabi', cities: ['Abu Dhabi', 'Al Ain', 'Al Dhafra', 'Al Ruwais', 'Liwa Oasis', 'Yas Island', 'Saadiyat Island', 'Al Maryah Island', 'Masdar City', 'Al Gharbia'] },
      { code: 'SH', name: 'Sharjah', cities: ['Sharjah', 'Al Dhaid', 'Khor Fakkan', 'Kalba', 'Dibba Al-Hisn', 'Al Hamriyah', 'Al Batayeh', 'Al Madam', 'Al Sajaa', 'Al Heera'] },
      { code: 'AJ', name: 'Ajman', cities: ['Ajman', 'Al Manama', 'Masfout', 'Al Hamidiya', 'Al Nuaimiya', 'Al Rashidiya', 'Al Mowaihat', 'Al Zahra', 'Al Rawda', 'Al Jurf'] },
      { code: 'FU', name: 'Fujairah', cities: ['Fujairah', 'Dibba Al-Fujairah', 'Al Badiyah', 'Al Siji', 'Al Hayl', 'Al Qurayyah', 'Al Faseel', 'Al Taween', 'Al Hala', 'Al Ghurfa'] },
      { code: 'RK', name: 'Ras Al Khaimah', cities: ['Ras Al Khaimah', 'Al Rams', 'Al Jazirah Al Hamra', 'Al Hamraniyah', 'Al Dhait', 'Al Ghail', 'Al Hudaibah', 'Al Marjan Island', 'Al Hamra Village', 'Al Nakheel'] },
      { code: 'UQ', name: 'Umm Al Quwain', cities: ['Umm Al Quwain', 'Al Sinniyah', 'Al Raas', 'Al Khor', 'Al Haditha', 'Al Salama', 'Al Ramlah', 'Al Aahad', 'Al Humrah', 'Al Sahab'] }
    ]
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    states: [
      { code: 'RJ', name: 'Riyadh Region', cities: ['Riyadh', 'Al Kharj', 'Al Diriyah', 'Al Majma\'ah', 'Al Zulfi', 'Al Ghat', 'Al Aflaj', 'Al Duwadimi', 'Al Quway\'iyah', 'Al Hariq'] },
      { code: 'MK', name: 'Makkah Region', cities: ['Mecca', 'Jeddah', 'Taif', 'Rabigh', 'Al Qunfudhah', 'Al Lith', 'Al Jumum', 'Khulais', 'Al Kamel', 'Al Khurmah'] },
      { code: 'MD', name: 'Madinah Region', cities: ['Medina', 'Yanbu', 'Al Ula', 'Badr', 'Khaybar', 'Al Henakiyah', 'Mahd Al Thahab', 'Al Rass', 'Al Badayea', 'Al Bukayriyah'] },
      { code: 'QA', name: 'Qassim Region', cities: ['Buraydah', 'Unaizah', 'Al Rass', 'Al Badayea', 'Al Bukayriyah', 'Al Asyah', 'Al Nabhaniyah', 'Uyun Al Jiwa', 'Riyadh Al Khabra', 'Al Mithnab'] },
      { code: 'AS', name: 'Asir Region', cities: ['Abha', 'Khamis Mushait', 'Bisha', 'Najran', 'Jizan', 'Sabya', 'Abu Arish', 'Samtah', 'Al Dayer', 'Al Reeth'] },
      { code: 'EP', name: 'Eastern Province', cities: ['Dammam', 'Al Khobar', 'Dhahran', 'Jubail', 'Al Ahsa', 'Qatif', 'Ras Tanura', 'Abqaiq', 'Al Khafji', 'Al Nairyah'] },
      { code: 'HA', name: 'Ha\'il Region', cities: ['Ha\'il', 'Baqaa', 'Al Ghat', 'Al Shinan', 'Al Sulaimi', 'Al Aqiq', 'Al Shammasi', 'Al Thamir', 'Al Qahtaniyah', 'Al Hazm'] },
      { code: 'JZ', name: 'Jazan Region', cities: ['Jazan', 'Sabya', 'Abu Arish', 'Samtah', 'Al Dayer', 'Al Reeth', 'Al Ahad Al Masarihah', 'Al Aridhah', 'Al Darb', 'Al Edabi'] },
      { code: 'NB', name: 'Northern Borders Region', cities: ['Arar', 'Rafha', 'Turaif', 'Al Uwayqilah', 'Dawmat Al Jandal', 'Al Qurayyat', 'Al Hadithah', 'Al Isawiyah', 'Al Nabhaniyah', 'Al Qasr'] },
      { code: 'TB', name: 'Tabuk Region', cities: ['Tabuk', 'Al Wajh', 'Duba', 'Tayma', 'Umluj', 'Al Bad', 'Al Zetah', 'Al Muweilah', 'Al Shaghab', 'Al Qalibah'] },
      { code: 'NG', name: 'Najran Region', cities: ['Najran', 'Sharurah', 'Hubuna', 'Badr Al Janub', 'Yadamah', 'Thar', 'Al Kharkhir', 'Al Aqiq', 'Al Fara', 'Al Qahtaniyah'] },
      { code: 'BA', name: 'Al Bahah Region', cities: ['Al Bahah', 'Baljurashi', 'Al Mikhwah', 'Al Aqiq', 'Al Qara', 'Al Mandaq', 'Qilwah', 'Al Hujrah', 'Al Athayir', 'Al Qamrah'] },
      { code: 'JG', name: 'Al Jouf Region', cities: ['Sakaka', 'Qurayyat', 'Dawmat Al Jandal', 'Al Isawiyah', 'Al Nabhaniyah', 'Al Qasr', 'Al Hadithah', 'Al Zetah', 'Al Muweilah', 'Al Shaghab'] }
    ]
  },
  {
    code: 'KW',
    name: 'Kuwait',
    states: [
      { code: 'KU', name: 'Al Asimah', cities: ['Kuwait City', 'Salmiya', 'Hawally', 'Al Salmiya', 'Al Hawalli', 'Al Salmiyah', 'Al Salmiya', 'Al Hawalli', 'Al Salmiya', 'Al Hawalli'] },
      { code: 'HA', name: 'Hawalli', cities: ['Hawally', 'Salmiya', 'Al Salmiya', 'Al Hawalli', 'Al Salmiyah', 'Al Salmiya', 'Al Hawalli', 'Al Salmiya', 'Al Hawalli', 'Al Salmiya'] },
      { code: 'AH', name: 'Al Ahmadi', cities: ['Al Ahmadi', 'Fahaheel', 'Al Fahaheel', 'Al Ahmadi', 'Fahaheel', 'Al Fahaheel', 'Al Ahmadi', 'Fahaheel', 'Al Fahaheel', 'Al Ahmadi'] },
      { code: 'JA', name: 'Al Jahra', cities: ['Al Jahra', 'Al Jahra', 'Al Jahra', 'Al Jahra', 'Al Jahra', 'Al Jahra', 'Al Jahra', 'Al Jahra', 'Al Jahra', 'Al Jahra'] },
      { code: 'FA', name: 'Al Farwaniyah', cities: ['Al Farwaniyah', 'Al Farwaniyah', 'Al Farwaniyah', 'Al Farwaniyah', 'Al Farwaniyah', 'Al Farwaniyah', 'Al Farwaniyah', 'Al Farwaniyah', 'Al Farwaniyah', 'Al Farwaniyah'] },
      { code: 'MU', name: 'Mubarak Al-Kabeer', cities: ['Mubarak Al-Kabeer', 'Mubarak Al-Kabeer', 'Mubarak Al-Kabeer', 'Mubarak Al-Kabeer', 'Mubarak Al-Kabeer', 'Mubarak Al-Kabeer', 'Mubarak Al-Kabeer', 'Mubarak Al-Kabeer', 'Mubarak Al-Kabeer', 'Mubarak Al-Kabeer'] }
    ]
  },
  {
    code: 'QA',
    name: 'Qatar',
    states: [
      { code: 'DA', name: 'Ad Dawhah', cities: ['Doha', 'Al Wakrah', 'Al Khor', 'Al Rayyan', 'Al Gharafa', 'Al Hilal', 'Al Mamoura', 'Al Sadd', 'Al Waab', 'Al Aziziya'] },
      { code: 'KH', name: 'Al Khawr wa adh Dhakhirah', cities: ['Al Khor', 'Al Thakhira', 'Al Gharafa', 'Al Hilal', 'Al Mamoura', 'Al Gharafa', 'Al Hilal', 'Al Mamoura', 'Al Gharafa', 'Al Hilal'] },
      { code: 'WA', name: 'Al Wakrah', cities: ['Al Wakrah', 'Al Wukair', 'Al Kharrara', 'Al Wakrah', 'Al Wukair', 'Al Kharrara', 'Al Wakrah', 'Al Wukair', 'Al Kharrara', 'Al Wakrah'] },
      { code: 'RA', name: 'Ar Rayyan', cities: ['Al Rayyan', 'Al Gharafa', 'Al Hilal', 'Al Mamoura', 'Al Sadd', 'Al Waab', 'Al Aziziya', 'Al Gharafa', 'Al Hilal', 'Al Mamoura'] },
      { code: 'AD', name: 'Al Daayen', cities: ['Al Daayen', 'Al Daayen', 'Al Daayen', 'Al Daayen', 'Al Daayen', 'Al Daayen', 'Al Daayen', 'Al Daayen', 'Al Daayen', 'Al Daayen'] },
      { code: 'AS', name: 'Al Shamal', cities: ['Al Shamal', 'Al Shamal', 'Al Shamal', 'Al Shamal', 'Al Shamal', 'Al Shamal', 'Al Shamal', 'Al Shamal', 'Al Shamal', 'Al Shamal'] },
      { code: 'AW', name: 'Al Wakrah', cities: ['Al Wakrah', 'Al Wukair', 'Al Kharrara', 'Al Wakrah', 'Al Wukair', 'Al Kharrara', 'Al Wakrah', 'Al Wukair', 'Al Kharrara', 'Al Wakrah'] },
      { code: 'US', name: 'Umm Salal', cities: ['Umm Salal', 'Umm Salal', 'Umm Salal', 'Umm Salal', 'Umm Salal', 'Umm Salal', 'Umm Salal', 'Umm Salal', 'Umm Salal', 'Umm Salal'] }
    ]
  },
  {
    code: 'BH',
    name: 'Bahrain',
    states: [
      { code: 'CA', name: 'Capital Governorate', cities: ['Manama', 'Juffair', 'Adliya', 'Gudaibiya', 'Seef', 'Al Fateh', 'Al Hoora', 'Al Juffair', 'Al Mahooz', 'Al Noaim'] },
      { code: 'MU', name: 'Muharraq Governorate', cities: ['Muharraq', 'Arad', 'Al Hidd', 'Al Dair', 'Al Qalali', 'Al Sayh', 'Al Dair', 'Al Hidd', 'Arad', 'Al Qalali'] },
      { code: 'SH', name: 'Southern Governorate', cities: ['Riffa', 'Isa Town', 'Sitra', 'Al Dur', 'Al Malikiyah', 'Al Hidd', 'Al Dair', 'Al Qalali', 'Al Sayh', 'Al Dair'] },
      { code: 'NO', name: 'Northern Governorate', cities: ['Hamad Town', 'Al Budaiya', 'Al Jasra', 'Al Markh', 'Al Qadam', 'Al Hidd', 'Al Dair', 'Al Qalali', 'Al Sayh', 'Al Dair'] }
    ]
  },
  {
    code: 'OM',
    name: 'Oman',
    states: [
      { code: 'MA', name: 'Muscat', cities: ['Muscat', 'Muttrah', 'Seeb', 'Bausher', 'Al Amerat', 'Quriyat', 'Al Bustan', 'Al Wadi Al Kabir', 'Al Khuwair', 'Al Ghubrah'] },
      { code: 'DA', name: 'Dhofar', cities: ['Salalah', 'Taqah', 'Mirbat', 'Rakhyut', 'Thumrait', 'Mughsayl', 'Dalkut', 'Shalim', 'Al Hallaniyat Islands', 'Al Mazyunah'] },
      { code: 'MU', name: 'Musandam', cities: ['Khasab', 'Bukha', 'Dibba Al-Baya', 'Madha', 'Khasab', 'Bukha', 'Dibba Al-Baya', 'Madha', 'Khasab', 'Bukha'] },
      { code: 'BU', name: 'Al Buraimi', cities: ['Al Buraimi', 'Mahdah', 'Al Sinaiyah', 'Al Buraimi', 'Mahdah', 'Al Sinaiyah', 'Al Buraimi', 'Mahdah', 'Al Sinaiyah', 'Al Buraimi'] },
      { code: 'AD', name: 'Ad Dakhiliyah', cities: ['Nizwa', 'Bahla', 'Adam', 'Al Hamra', 'Manah', 'Izki', 'Samail', 'Bid Bid', 'Al Jabal Al Akhdar', 'Al Jabal Al Aswad'] },
      { code: 'BN', name: 'Al Batinah North', cities: ['Sohar', 'Shinas', 'Liwa', 'Saham', 'Al Khaburah', 'Al Suwaiq', 'Al Awabi', 'Nakhal', 'Wadi Al Maawil', 'Al Rustaq'] },
      { code: 'BS', name: 'Al Batinah South', cities: ['Al Rustaq', 'Al Awabi', 'Nakhal', 'Wadi Al Maawil', 'Al Khaburah', 'Al Suwaiq', 'Saham', 'Liwa', 'Shinas', 'Sohar'] },
      { code: 'AW', name: 'Al Wusta', cities: ['Haima', 'Duqm', 'Mahout', 'Al Jazir', 'Al Ghubrah', 'Al Wusta', 'Duqm', 'Mahout', 'Al Jazir', 'Al Ghubrah'] },
      { code: 'ASN', name: 'Ash Sharqiyah North', cities: ['Ibra', 'Al Mudhaibi', 'Al Qabil', 'Wadi Bani Khalid', 'Al Kamil Wal Wafi', 'Sur', 'Al Kamil Wal Wafi', 'Wadi Bani Khalid', 'Al Qabil', 'Al Mudhaibi'] },
      { code: 'ASS', name: 'Ash Sharqiyah South', cities: ['Sur', 'Al Kamil Wal Wafi', 'Wadi Bani Khalid', 'Al Qabil', 'Al Mudhaibi', 'Ibra', 'Al Kamil Wal Wafi', 'Wadi Bani Khalid', 'Al Qabil', 'Al Mudhaibi'] },
      { code: 'DH', name: 'Dhofar', cities: ['Salalah', 'Taqah', 'Mirbat', 'Rakhyut', 'Thumrait', 'Mughsayl', 'Dalkut', 'Shalim', 'Al Hallaniyat Islands', 'Al Mazyunah'] }
    ]
  }
];

// Helper functions
export const getPilotCountry = (countryCode: string): PilotCountry | undefined => {
  return pilotCountriesData.find(country => country.code === countryCode);
};

export const getStatesByCountry = (countryCode: string): PilotLocation[] => {
  const country = getPilotCountry(countryCode);
  return country ? country.states : [];
};

export const getCitiesByState = (countryCode: string, stateCode: string): string[] => {
  const country = getPilotCountry(countryCode);
  if (!country) return [];
  
  const state = country.states.find(s => s.code === stateCode);
  return state ? state.cities || [] : [];
};
