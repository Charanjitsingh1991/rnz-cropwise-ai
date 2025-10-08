// Complete location data for RNZ CropWise Pilot Countries
// Matching the web app implementation exactly

class PilotLocation {
  final String code;
  final String name;
  final List<String> cities;

  PilotLocation({
    required this.code,
    required this.name,
    required this.cities,
  });
}

class PilotCountry {
  final String code;
  final String name;
  final List<PilotLocation> states;

  PilotCountry({
    required this.code,
    required this.name,
    required this.states,
  });
}

class LocationData {
  static final List<PilotCountry> pilotCountriesData = [
    PilotCountry(
      code: 'IN',
      name: 'India',
      states: [
        // All 28 States
        PilotLocation(code: 'AP', name: 'Andhra Pradesh', cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Anantapur', 'Kadapa', 'Chittoor', 'Srikakulam', 'Vizianagaram']),
        PilotLocation(code: 'AR', name: 'Arunachal Pradesh', cities: ['Itanagar', 'Naharlagun', 'Pasighat', 'Bomdila', 'Tawang', 'Ziro', 'Along', 'Tezu', 'Roing', 'Daporijo']),
        PilotLocation(code: 'AS', name: 'Assam', cities: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon', 'Dhubri', 'Sivasagar']),
        PilotLocation(code: 'BR', name: 'Bihar', cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Arrah', 'Begusarai', 'Katihar', 'Chhapra']),
        PilotLocation(code: 'CT', name: 'Chhattisgarh', cities: ['Raipur', 'Bhilai', 'Korba', 'Bilaspur', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Ambikapur', 'Chirmiri', 'Raigarh']),
        PilotLocation(code: 'GA', name: 'Goa', cities: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Mormugao', 'Bicholim', 'Valpoi', 'Sanquelim', 'Curchorem']),
        PilotLocation(code: 'GJ', name: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Anand', 'Bharuch', 'Gandhinagar', 'Junagadh']),
        PilotLocation(code: 'HR', name: 'Haryana', cities: ['Gurgaon', 'Faridabad', 'Panipat', 'Yamunanagar', 'Rohtak', 'Hisar', 'Karnal', 'Sonipat', 'Ambala', 'Bhiwani']),
        PilotLocation(code: 'HP', name: 'Himachal Pradesh', cities: ['Shimla', 'Mandi', 'Solan', 'Kullu', 'Dharamshala', 'Bilaspur HP', 'Una', 'Hamirpur', 'Chamba', 'Kangra']),
        PilotLocation(code: 'JH', name: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh', 'Medininagar', 'Chatra']),
        PilotLocation(code: 'KA', name: 'Karnataka', cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga', 'Davangere', 'Bellary', 'Bijapur', 'Shimoga']),
        PilotLocation(code: 'KL', name: 'Kerala', cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Alappuzha', 'Palakkad', 'Malappuram', 'Kannur', 'Kottayam']),
        PilotLocation(code: 'MP', name: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas', 'Satna', 'Ratlam', 'Rewa']),
        PilotLocation(code: 'MH', name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Kolhapur', 'Amravati', 'Nanded']),
        PilotLocation(code: 'MN', name: 'Manipur', cities: ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur', 'Ukhrul', 'Senapati', 'Tamenglong', 'Chandel', 'Jiribam', 'Kakching']),
        PilotLocation(code: 'ML', name: 'Meghalaya', cities: ['Shillong', 'Tura', 'Jowai', 'Nongstoin', 'Williamnagar', 'Baghmara', 'Nongpoh', 'Mairang', 'Resubelpara', 'Ampati']),
        PilotLocation(code: 'MZ', name: 'Mizoram', cities: ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Kolasib', 'Serchhip', 'Lawngtlai', 'Mamit', 'Saitual', 'Khawzawl']),
        PilotLocation(code: 'NL', name: 'Nagaland', cities: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Zunheboto', 'Phek', 'Mon', 'Longleng', 'Kiphire']),
        PilotLocation(code: 'OR', name: 'Odisha', cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Brahmapur', 'Sambalpur', 'Puri', 'Balasore', 'Bhadrak', 'Baripada', 'Jharsuguda']),
        PilotLocation(code: 'PB', name: 'Punjab', cities: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Hoshiarpur', 'Moga', 'Firozpur', 'Kapurthala']),
        PilotLocation(code: 'RJ', name: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Sikar', 'Sri Ganganagar', 'Alwar', 'Bhilwara']),
        PilotLocation(code: 'SK', name: 'Sikkim', cities: ['Gangtok', 'Namchi', 'Mangan', 'Gyalshing', 'Ravongla', 'Lachung', 'Pelling', 'Rangpo', 'Singtam', 'Jorethang']),
        PilotLocation(code: 'TN', name: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Vellore', 'Erode', 'Tiruppur', 'Thoothukkudi', 'Dindigul']),
        PilotLocation(code: 'TS', name: 'Telangana', cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Ramagundam', 'Khammam', 'Mahbubnagar', 'Nalgonda', 'Adilabad', 'Siddipet']),
        PilotLocation(code: 'TR', name: 'Tripura', cities: ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailasahar', 'Belonia', 'Khowai', 'Teliamura', 'Ambassa', 'Sabroom', 'Kamalpur']),
        PilotLocation(code: 'UP', name: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Varanasi', 'Prayagraj', 'Noida', 'Bareilly', 'Aligarh', 'Meerut']),
        PilotLocation(code: 'UT', name: 'Uttarakhand', cities: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur', 'Kashipur', 'Rishikesh', 'Almora', 'Nainital', 'Pithoragarh']),
        PilotLocation(code: 'WB', name: 'West Bengal', cities: ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Bardhaman', 'Malda', 'Baharampur', 'Habra', 'Kharagpur']),
        
        // 8 Union Territories
        PilotLocation(code: 'AN', name: 'Andaman and Nicobar Islands', cities: ['Port Blair', 'Car Nicobar', 'Mayabunder', 'Diglipur', 'Rangat', 'Hut Bay', 'Campbell Bay', 'Neil Island', 'Havelock Island', 'Baratang']),
        PilotLocation(code: 'CH', name: 'Chandigarh', cities: ['Chandigarh', 'Panchkula', 'Mohali', 'Zirakpur', 'Kharar', 'Kalka', 'Pinjore', 'Baddi', 'Nalagarh', 'Parwanoo']),
        PilotLocation(code: 'DN', name: 'Dadra and Nagar Haveli and Daman and Diu', cities: ['Silvassa', 'Daman', 'Diu', 'Naroli', 'Amli', 'Dadra', 'Khanvel', 'Vapi', 'Umbergaon', 'Bilimora']),
        PilotLocation(code: 'DL', name: 'Delhi', cities: ['New Delhi', 'Delhi Cantonment', 'Civil Lines', 'Connaught Place', 'Dwarka', 'Rohini', 'Pitampura', 'Janakpuri', 'Lajpat Nagar', 'Saket']),
        PilotLocation(code: 'JK', name: 'Jammu and Kashmir', cities: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Udhampur', 'Kathua', 'Rajouri', 'Poonch', 'Doda', 'Kishtwar']),
        PilotLocation(code: 'LA', name: 'Ladakh', cities: ['Leh', 'Kargil', 'Drass', 'Nubra Valley', 'Zanskar', 'Pangong Lake', 'Tso Moriri', 'Diskit', 'Hemis', 'Alchi']),
        PilotLocation(code: 'LD', name: 'Lakshadweep', cities: ['Kavaratti', 'Agatti', 'Amini', 'Andrott', 'Kadmat', 'Kalpeni', 'Minicoy', 'Chetlat', 'Kiltan', 'Bitra']),
        PilotLocation(code: 'PY', name: 'Puducherry', cities: ['Puducherry', 'Karaikal', 'Mahe', 'Yanam', 'Ozhukarai', 'Villianur', 'Bahour', 'Nettapakkam', 'Mannadipet', 'Ariyankuppam']),
      ],
    ),
    PilotCountry(
      code: 'PK',
      name: 'Pakistan',
      states: [
        // 4 Provinces
        PilotLocation(code: 'PB', name: 'Punjab', cities: ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala', 'Sialkot', 'Sargodha', 'Bahawalpur', 'Sahiwal', 'Jhang']),
        PilotLocation(code: 'SD', name: 'Sindh', cities: ['Karachi', 'Hyderabad', 'Sukkur', 'Larkana', 'Nawabshah', 'Mirpur Khas', 'Shikarpur', 'Jacobabad', 'Dadu', 'Thatta']),
        PilotLocation(code: 'KP', name: 'Khyber Pakhtunkhwa', cities: ['Peshawar', 'Mardan', 'Mingora', 'Kohat', 'Abbottabad', 'Dera Ismail Khan', 'Mansehra', 'Bannu', 'Swabi', 'Charsadda']),
        PilotLocation(code: 'BL', name: 'Balochistan', cities: ['Quetta', 'Turbat', 'Khuzdar', 'Chaman', 'Hub', 'Gwadar', 'Loralai', 'Zhob', 'Sibi', 'Dera Bugti']),
        
        // 2 Territories
        PilotLocation(code: 'GB', name: 'Gilgit-Baltistan', cities: ['Gilgit', 'Skardu', 'Chilas', 'Astore', 'Ghanche', 'Diamer', 'Hunza', 'Nagar', 'Shigar', 'Kharmang']),
        PilotLocation(code: 'AJK', name: 'Azad Jammu and Kashmir', cities: ['Muzaffarabad', 'Mirpur', 'Rawalakot', 'Kotli', 'Bagh', 'Bhimber', 'Hattian Bala', 'Neelum', 'Haveli', 'Sudhnuti']),
      ],
    ),
    PilotCountry(
      code: 'LK',
      name: 'Sri Lanka',
      states: [
        PilotLocation(code: 'WP', name: 'Western Province', cities: ['Colombo', 'Gampaha', 'Kalutara', 'Moratuwa', 'Negombo', 'Wattala', 'Kelaniya', 'Panadura', 'Horana', 'Bandaragama']),
        PilotLocation(code: 'CP', name: 'Central Province', cities: ['Kandy', 'Matale', 'Nuwara Eliya', 'Peradeniya', 'Gampola', 'Katugastota', 'Kundasale', 'Galagedara', 'Dambulla', 'Sigiriya']),
        PilotLocation(code: 'SP', name: 'Southern Province', cities: ['Galle', 'Matara', 'Hambantota', 'Weligama', 'Ambalangoda', 'Hikkaduwa', 'Tangalle', 'Tissamaharama', 'Deniyaya', 'Akuressa']),
        PilotLocation(code: 'NP', name: 'Northern Province', cities: ['Jaffna', 'Vavuniya', 'Kilinochchi', 'Mullaitivu', 'Point Pedro', 'Chavakachcheri', 'Kopay', 'Nallur', 'Tellippalai', 'Chankanai']),
        PilotLocation(code: 'EP', name: 'Eastern Province', cities: ['Batticaloa', 'Trincomalee', 'Ampara', 'Kalmunai', 'Eravur', 'Kattankudy', 'Kandy', 'Dehiattakandiya', 'Akkaraipattu', 'Sammanthurai']),
        PilotLocation(code: 'NWP', name: 'North Western Province', cities: ['Kurunegala', 'Puttalam', 'Chilaw', 'Kuliyapitiya', 'Polgahawela', 'Wennappuwa', 'Nattandiya', 'Madampe', 'Narammala', 'Bingiriya']),
        PilotLocation(code: 'NCP', name: 'North Central Province', cities: ['Anuradhapura', 'Polonnaruwa', 'Medawachchiya', 'Tambuttegama', 'Kekirawa', 'Habarana', 'Galnewa', 'Kebithigollawa', 'Palugaswewa', 'Elahera']),
        PilotLocation(code: 'UP', name: 'Uva Province', cities: ['Badulla', 'Monaragala', 'Bandarawela', 'Haputale', 'Welimada', 'Bibile', 'Wellawaya', 'Koslanda', 'Passara', 'Rideemaliyadda']),
        PilotLocation(code: 'SAB', name: 'Sabaragamuwa Province', cities: ['Ratnapura', 'Kegalle', 'Embilipitiya', 'Balangoda', 'Kuruwita', 'Eheliyagoda', 'Mawanella', 'Warakapola', 'Rambukkana', 'Bulathkohupitiya']),
      ],
    ),
    PilotCountry(
      code: 'BD',
      name: 'Bangladesh',
      states: [
        PilotLocation(code: 'DH', name: 'Dhaka Division', cities: ['Dhaka', 'Gazipur', 'Narayanganj', 'Tangail', 'Narsingdi', 'Munshiganj', 'Rajbari', 'Madaripur', 'Gopalganj', 'Faridpur']),
        PilotLocation(code: 'CT', name: 'Chittagong Division', cities: ['Chittagong', 'Comilla', 'Feni', 'Chandpur', 'Noakhali', 'Lakshmipur', 'Cox\'s Bazar', 'Bandarban', 'Rangamati', 'Khagrachari']),
        PilotLocation(code: 'RJ', name: 'Rajshahi Division', cities: ['Rajshahi', 'Bogra', 'Pabna', 'Sirajganj', 'Natore', 'Naogaon', 'Chapainawabganj', 'Joypurhat', 'Godagari', 'Bagha']),
        PilotLocation(code: 'KH', name: 'Khulna Division', cities: ['Khulna', 'Jessore', 'Satkhira', 'Magura', 'Jhenaidah', 'Bagerhat', 'Narail', 'Kushtia', 'Meherpur', 'Chuadanga']),
        PilotLocation(code: 'BR', name: 'Barisal Division', cities: ['Barisal', 'Pirojpur', 'Patuakhali', 'Bhola', 'Barguna', 'Jhalokati', 'Banaripara', 'Nesarabad', 'Gournadi', 'Muladi']),
        PilotLocation(code: 'SY', name: 'Sylhet Division', cities: ['Sylhet', 'Moulvibazar', 'Habiganj', 'Sunamganj', 'Beanibazar', 'Golapganj', 'Bishwanath', 'Balaganj', 'Companiganj', 'Fenchuganj']),
        PilotLocation(code: 'RG', name: 'Rangpur Division', cities: ['Rangpur', 'Dinajpur', 'Kurigram', 'Gaibandha', 'Nilphamari', 'Panchagarh', 'Thakurgaon', 'Lalmonirhat', 'Pirgachha', 'Mithapukur']),
        PilotLocation(code: 'MM', name: 'Mymensingh Division', cities: ['Mymensingh', 'Jamalpur', 'Sherpur', 'Netrokona', 'Fulbaria', 'Trishal', 'Gouripur', 'Ishwarganj', 'Nandail', 'Gaffargaon']),
      ],
    ),
    PilotCountry(
      code: 'AE',
      name: 'United Arab Emirates',
      states: [
        PilotLocation(code: 'DU', name: 'Dubai', cities: ['Dubai', 'Jebel Ali', 'Al Barsha', 'Al Qusais', 'Al Karama', 'Deira', 'Bur Dubai', 'Jumeirah', 'Palm Jumeirah', 'Dubai Marina']),
        PilotLocation(code: 'AB', name: 'Abu Dhabi', cities: ['Abu Dhabi', 'Al Ain', 'Al Dhafra', 'Al Ruwais', 'Liwa Oasis', 'Yas Island', 'Saadiyat Island', 'Al Maryah Island', 'Masdar City', 'Al Gharbia']),
        PilotLocation(code: 'SH', name: 'Sharjah', cities: ['Sharjah', 'Al Dhaid', 'Khor Fakkan', 'Kalba', 'Dibba Al-Hisn', 'Al Hamriyah', 'Al Batayeh', 'Al Madam', 'Al Sajaa', 'Al Heera']),
        PilotLocation(code: 'AJ', name: 'Ajman', cities: ['Ajman', 'Al Manama', 'Masfout', 'Al Hamidiya', 'Al Nuaimiya', 'Al Rashidiya', 'Al Mowaihat', 'Al Zahra', 'Al Rawda', 'Al Jurf']),
        PilotLocation(code: 'FU', name: 'Fujairah', cities: ['Fujairah', 'Dibba Al-Fujairah', 'Al Badiyah', 'Al Siji', 'Al Hayl', 'Al Qurayyah', 'Al Faseel', 'Al Taween', 'Al Hala', 'Al Ghurfa']),
        PilotLocation(code: 'RK', name: 'Ras Al Khaimah', cities: ['Ras Al Khaimah', 'Al Rams', 'Al Jazirah Al Hamra', 'Al Hamraniyah', 'Al Dhait', 'Al Ghail', 'Al Hudaibah', 'Al Marjan Island', 'Al Hamra Village', 'Al Nakheel']),
        PilotLocation(code: 'UQ', name: 'Umm Al Quwain', cities: ['Umm Al Quwain', 'Al Sinniyah', 'Al Raas', 'Al Khor', 'Al Haditha', 'Al Salama', 'Al Ramlah', 'Al Aahad', 'Al Humrah', 'Al Sahab']),
      ],
    ),
    PilotCountry(
      code: 'SA',
      name: 'Saudi Arabia',
      states: [
        PilotLocation(code: 'RJ', name: 'Riyadh Region', cities: ['Riyadh', 'Al Kharj', 'Al Diriyah', 'Al Majma\'ah', 'Al Zulfi', 'Al Ghat', 'Al Aflaj', 'Al Duwadimi', 'Al Quway\'iyah', 'Al Hariq']),
        PilotLocation(code: 'MK', name: 'Makkah Region', cities: ['Mecca', 'Jeddah', 'Taif', 'Rabigh', 'Al Qunfudhah', 'Al Lith', 'Al Jumum', 'Khulais', 'Al Kamel', 'Al Khurmah']),
        PilotLocation(code: 'MD', name: 'Madinah Region', cities: ['Medina', 'Yanbu', 'Al Ula', 'Badr', 'Khaybar', 'Al Henakiyah', 'Mahd Al Thahab', 'Al Rass', 'Al Badayea', 'Al Bukayriyah']),
        PilotLocation(code: 'QA', name: 'Qassim Region', cities: ['Buraydah', 'Unaizah', 'Al Rass', 'Al Badayea', 'Al Bukayriyah', 'Al Asyah', 'Al Nabhaniyah', 'Uyun Al Jiwa', 'Riyadh Al Khabra', 'Al Mithnab']),
        PilotLocation(code: 'AS', name: 'Asir Region', cities: ['Abha', 'Khamis Mushait', 'Bisha', 'Najran', 'Jizan', 'Sabya', 'Abu Arish', 'Samtah', 'Al Dayer', 'Al Reeth']),
        PilotLocation(code: 'EP', name: 'Eastern Province', cities: ['Dammam', 'Al Khobar', 'Dhahran', 'Jubail', 'Al Ahsa', 'Qatif', 'Ras Tanura', 'Abqaiq', 'Al Khafji', 'Al Nairyah']),
        PilotLocation(code: 'HA', name: 'Ha\'il Region', cities: ['Ha\'il', 'Baqaa', 'Al Ghat', 'Al Shinan', 'Al Sulaimi', 'Al Aqiq', 'Al Shammasi', 'Al Thamir', 'Al Qahtaniyah', 'Al Hazm']),
        PilotLocation(code: 'JZ', name: 'Jazan Region', cities: ['Jazan', 'Sabya', 'Abu Arish', 'Samtah', 'Al Dayer', 'Al Reeth', 'Al Ahad Al Masarihah', 'Al Aridhah', 'Al Darb', 'Al Edabi']),
        PilotLocation(code: 'NB', name: 'Northern Borders Region', cities: ['Arar', 'Rafha', 'Turaif', 'Al Uwayqilah', 'Dawmat Al Jandal', 'Al Qurayyat', 'Al Hadithah', 'Al Isawiyah', 'Al Nabhaniyah', 'Al Qasr']),
        PilotLocation(code: 'TB', name: 'Tabuk Region', cities: ['Tabuk', 'Al Wajh', 'Duba', 'Tayma', 'Umluj', 'Al Bad', 'Al Zetah', 'Al Muweilah', 'Al Shaghab', 'Al Qalibah']),
        PilotLocation(code: 'NG', name: 'Najran Region', cities: ['Najran', 'Sharurah', 'Hubuna', 'Badr Al Janub', 'Yadamah', 'Thar', 'Al Kharkhir', 'Al Aqiq', 'Al Fara', 'Al Qahtaniyah']),
        PilotLocation(code: 'BA', name: 'Al Bahah Region', cities: ['Al Bahah', 'Baljurashi', 'Al Mikhwah', 'Al Aqiq', 'Al Qara', 'Al Mandaq', 'Qilwah', 'Al Hujrah', 'Al Athayir', 'Al Qamrah']),
        PilotLocation(code: 'JG', name: 'Al Jouf Region', cities: ['Sakaka', 'Qurayyat', 'Dawmat Al Jandal', 'Al Isawiyah', 'Al Nabhaniyah', 'Al Qasr', 'Al Hadithah', 'Al Zetah', 'Al Muweilah', 'Al Shaghab']),
      ],
    ),
    PilotCountry(
      code: 'KW',
      name: 'Kuwait',
      states: [
        PilotLocation(code: 'KU', name: 'Al Asimah', cities: ['Kuwait City', 'Salmiya', 'Hawally', 'Al Salmiya', 'Al Hawalli', 'Al Salmiyah', 'Al Salmiya North', 'Al Hawalli South', 'Al Salmiya East', 'Al Hawalli West']),
        PilotLocation(code: 'HA', name: 'Hawalli', cities: ['Hawally', 'Salmiya', 'Al Salmiya', 'Al Hawalli', 'Al Salmiyah', 'Al Salmiya Central', 'Al Hawalli North', 'Al Salmiya West', 'Al Hawalli East', 'Al Salmiya South']),
        PilotLocation(code: 'AH', name: 'Al Ahmadi', cities: ['Al Ahmadi', 'Fahaheel', 'Al Fahaheel', 'Al Ahmadi North', 'Fahaheel South', 'Al Fahaheel East', 'Al Ahmadi West', 'Fahaheel Central', 'Al Fahaheel North', 'Al Ahmadi South']),
        PilotLocation(code: 'JA', name: 'Al Jahra', cities: ['Al Jahra', 'Al Jahra North', 'Al Jahra South', 'Al Jahra East', 'Al Jahra West', 'Al Jahra Central', 'Al Jahra Industrial', 'Al Jahra Residential', 'Al Jahra Commercial', 'Al Jahra Port']),
        PilotLocation(code: 'FA', name: 'Al Farwaniyah', cities: ['Al Farwaniyah', 'Al Farwaniyah North', 'Al Farwaniyah South', 'Al Farwaniyah East', 'Al Farwaniyah West', 'Al Farwaniyah Central', 'Al Farwaniyah Industrial', 'Al Farwaniyah Residential', 'Al Farwaniyah Commercial', 'Al Farwaniyah Port']),
        PilotLocation(code: 'MU', name: 'Mubarak Al-Kabeer', cities: ['Mubarak Al-Kabeer', 'Mubarak Al-Kabeer North', 'Mubarak Al-Kabeer South', 'Mubarak Al-Kabeer East', 'Mubarak Al-Kabeer West', 'Mubarak Al-Kabeer Central', 'Mubarak Al-Kabeer Industrial', 'Mubarak Al-Kabeer Residential', 'Mubarak Al-Kabeer Commercial', 'Mubarak Al-Kabeer Port']),
      ],
    ),
    PilotCountry(
      code: 'QA',
      name: 'Qatar',
      states: [
        PilotLocation(code: 'DA', name: 'Ad Dawhah', cities: ['Doha', 'Al Wakrah', 'Al Khor', 'Al Rayyan', 'Al Gharafa', 'Al Hilal', 'Al Mamoura', 'Al Sadd', 'Al Waab', 'Al Aziziya']),
        PilotLocation(code: 'KH', name: 'Al Khawr wa adh Dhakhirah', cities: ['Al Khor', 'Al Thakhira', 'Al Gharafa', 'Al Hilal', 'Al Mamoura', 'Al Gharafa North', 'Al Hilal West', 'Al Mamoura East', 'Al Gharafa South', 'Al Hilal East']),
        PilotLocation(code: 'WA', name: 'Al Wakrah', cities: ['Al Wakrah', 'Al Wukair', 'Al Kharrara', 'Al Wakrah City', 'Al Wukair Industrial', 'Al Kharrara South', 'Al Wakrah North', 'Al Wukair Residential', 'Al Kharrara North', 'Al Wakrah South']),
        PilotLocation(code: 'RA', name: 'Ar Rayyan', cities: ['Al Rayyan', 'Al Gharafa', 'Al Hilal', 'Al Mamoura', 'Al Sadd', 'Al Waab', 'Al Aziziya', 'Al Gharafa North', 'Al Hilal West', 'Al Mamoura East']),
        PilotLocation(code: 'AD', name: 'Al Daayen', cities: ['Al Daayen', 'Al Daayen North', 'Al Daayen South', 'Al Daayen East', 'Al Daayen West', 'Al Daayen Central', 'Al Daayen Industrial', 'Al Daayen Residential', 'Al Daayen Commercial', 'Al Daayen Port']),
        PilotLocation(code: 'AS', name: 'Al Shamal', cities: ['Al Shamal', 'Al Shamal North', 'Al Shamal South', 'Al Shamal East', 'Al Shamal West', 'Al Shamal Central', 'Al Shamal Industrial', 'Al Shamal Residential', 'Al Shamal Commercial', 'Al Shamal Port']),
        PilotLocation(code: 'US', name: 'Umm Salal', cities: ['Umm Salal', 'Umm Salal North', 'Umm Salal South', 'Umm Salal East', 'Umm Salal West', 'Umm Salal Central', 'Umm Salal Industrial', 'Umm Salal Residential', 'Umm Salal Commercial', 'Umm Salal Port']),
      ],
    ),
    PilotCountry(
      code: 'BH',
      name: 'Bahrain',
      states: [
        PilotLocation(code: 'CA', name: 'Capital Governorate', cities: ['Manama', 'Juffair', 'Adliya', 'Gudaibiya', 'Seef', 'Al Fateh', 'Al Hoora', 'Al Juffair', 'Al Mahooz', 'Al Noaim']),
        PilotLocation(code: 'MU', name: 'Muharraq Governorate', cities: ['Muharraq', 'Arad', 'Al Hidd', 'Al Dair', 'Al Qalali', 'Al Sayh', 'Al Dair', 'Al Hidd', 'Arad', 'Al Qalali']),
        PilotLocation(code: 'SH', name: 'Southern Governorate', cities: ['Riffa', 'Isa Town', 'Sitra', 'Al Dur', 'Al Malikiyah', 'Al Hidd', 'Al Dair', 'Al Qalali', 'Al Sayh', 'Al Dair']),
        PilotLocation(code: 'NO', name: 'Northern Governorate', cities: ['Hamad Town', 'Al Budaiya', 'Al Jasra', 'Al Markh', 'Al Qadam', 'Al Hidd', 'Al Dair', 'Al Qalali', 'Al Sayh', 'Al Dair']),
      ],
    ),
    PilotCountry(
      code: 'OM',
      name: 'Oman',
      states: [
        PilotLocation(code: 'MA', name: 'Muscat', cities: ['Muscat', 'Muttrah', 'Seeb', 'Bausher', 'Al Amerat', 'Quriyat', 'Al Bustan', 'Al Wadi Al Kabir', 'Al Khuwair', 'Al Ghubrah']),
        PilotLocation(code: 'DA', name: 'Dhofar', cities: ['Salalah', 'Taqah', 'Mirbat', 'Rakhyut', 'Thumrait', 'Mughsayl', 'Dalkut', 'Shalim', 'Al Hallaniyat Islands', 'Al Mazyunah']),
        PilotLocation(code: 'MU', name: 'Musandam', cities: ['Khasab', 'Bukha', 'Dibba Al-Baya', 'Madha', 'Khasab North', 'Bukha South', 'Dibba Al-Baya East', 'Madha West', 'Khasab Central', 'Bukha Port']),
        PilotLocation(code: 'BU', name: 'Al Buraimi', cities: ['Al Buraimi', 'Mahdah', 'Al Sinaiyah', 'Al Buraimi North', 'Mahdah South', 'Al Sinaiyah East', 'Al Buraimi West', 'Mahdah Central', 'Al Sinaiyah Port', 'Al Buraimi Industrial']),
        PilotLocation(code: 'AD', name: 'Ad Dakhiliyah', cities: ['Nizwa', 'Bahla', 'Adam', 'Al Hamra', 'Manah', 'Izki', 'Samail', 'Bid Bid', 'Al Jabal Al Akhdar', 'Al Jabal Al Aswad']),
        PilotLocation(code: 'BN', name: 'Al Batinah North', cities: ['Sohar', 'Shinas', 'Liwa', 'Saham', 'Al Khaburah', 'Al Suwaiq', 'Al Awabi', 'Nakhal', 'Wadi Al Maawil', 'Al Rustaq']),
        PilotLocation(code: 'BS', name: 'Al Batinah South', cities: ['Al Rustaq', 'Al Awabi', 'Nakhal', 'Wadi Al Maawil', 'Al Khaburah', 'Al Suwaiq', 'Saham', 'Liwa', 'Shinas', 'Sohar']),
        PilotLocation(code: 'AW', name: 'Al Wusta', cities: ['Haima', 'Duqm', 'Mahout', 'Al Jazir', 'Al Ghubrah', 'Al Wusta Central', 'Duqm Port', 'Mahout Industrial', 'Al Jazir North', 'Al Ghubrah South']),
        PilotLocation(code: 'ASN', name: 'Ash Sharqiyah North', cities: ['Ibra', 'Al Mudhaibi', 'Al Qabil', 'Wadi Bani Khalid', 'Al Kamil Wal Wafi', 'Sur North', 'Al Kamil Wal Wafi East', 'Wadi Bani Khalid West', 'Al Qabil South', 'Al Mudhaibi Central']),
        PilotLocation(code: 'ASS', name: 'Ash Sharqiyah South', cities: ['Sur South', 'Al Kamil Wal Wafi West', 'Wadi Bani Khalid East', 'Al Qabil North', 'Al Mudhaibi Port', 'Ibra Central', 'Al Kamil Wal Wafi South', 'Wadi Bani Khalid Central', 'Al Qabil Industrial', 'Al Mudhaibi North']),
        PilotLocation(code: 'DH', name: 'Dhofar', cities: ['Salalah', 'Taqah', 'Mirbat', 'Rakhyut', 'Thumrait', 'Mughsayl', 'Dalkut', 'Shalim', 'Al Hallaniyat Islands', 'Al Mazyunah']),
      ],
    ),
    // New countries added for expanded pilot program
    PilotCountry(
      code: 'MY',
      name: 'Malaysia',
      states: [
        PilotLocation(code: 'KL', name: 'Kuala Lumpur', cities: ['Kuala Lumpur', 'Petaling Jaya', 'Shah Alam', 'Subang Jaya', 'Klang', 'Ampang', 'Cheras', 'Kepong', 'Setapak', 'Wangsa Maju']),
        PilotLocation(code: 'SEL', name: 'Selangor', cities: ['Shah Alam', 'Petaling Jaya', 'Subang Jaya', 'Klang', 'Kajang', 'Ampang', 'Cheras', 'Kepong', 'Setapak', 'Wangsa Maju']),
        PilotLocation(code: 'JHR', name: 'Johor', cities: ['Johor Bahru', 'Kluang', 'Batu Pahat', 'Muar', 'Segamat', 'Kulai', 'Pontian', 'Kota Tinggi', 'Mersing', 'Tangkak']),
        PilotLocation(code: 'KDH', name: 'Kedah', cities: ['Alor Setar', 'Sungai Petani', 'Kulim', 'Langkawi', 'Jitra', 'Pokok Sena', 'Kubang Pasu', 'Padang Terap', 'Kota Setar', 'Yan']),
        PilotLocation(code: 'KTN', name: 'Kelantan', cities: ['Kota Bharu', 'Pasir Mas', 'Tumpat', 'Bachok', 'Pasir Puteh', 'Machang', 'Jeli', 'Kuala Krai', 'Gua Musang', 'Tanah Merah']),
        PilotLocation(code: 'MLK', name: 'Malacca', cities: ['Malacca City', 'Alor Gajah', 'Jasin', 'Masjid Tanah', 'Merlimau', 'Sungai Udang', 'Klebang', 'Ayer Keroh', 'Batu Berendam', 'Bukit Katil']),
        PilotLocation(code: 'NSN', name: 'Negeri Sembilan', cities: ['Seremban', 'Port Dickson', 'Jelebu', 'Jempol', 'Kuala Pilah', 'Rembau', 'Tampin', 'Lenggeng', 'Mantin', 'Labu']),
        PilotLocation(code: 'PHG', name: 'Pahang', cities: ['Kuantan', 'Temerloh', 'Bentong', 'Mentakab', 'Raub', 'Jerantut', 'Lipis', 'Rompin', 'Maran', 'Cameron Highlands']),
        PilotLocation(code: 'PRK', name: 'Perak', cities: ['Ipoh', 'Taiping', 'Sitiawan', 'Teluk Intan', 'Batu Gajah', 'Kuala Kangsar', 'Lenggong', 'Gerik', 'Lumut', 'Manjung']),
        PilotLocation(code: 'PLS', name: 'Perlis', cities: ['Kangar', 'Arau', 'Padang Besar', 'Kuala Perlis', 'Beseri', 'Chuping', 'Kaki Bukit', 'Mata Ayer', 'Simpang Empat', 'Wang Kelian']),
        PilotLocation(code: 'PNG', name: 'Penang', cities: ['George Town', 'Butterworth', 'Bukit Mertajam', 'Nibong Tebal', 'Seberang Perai', 'Bayan Lepas', 'Balik Pulau', 'Tanjung Bungah', 'Gelugor', 'Air Itam']),
        PilotLocation(code: 'SBH', name: 'Sabah', cities: ['Kota Kinabalu', 'Sandakan', 'Tawau', 'Lahad Datu', 'Keningau', 'Kudat', 'Beaufort', 'Kota Belud', 'Papar', 'Semporna']),
        PilotLocation(code: 'SWK', name: 'Sarawak', cities: ['Kuching', 'Miri', 'Sibu', 'Bintulu', 'Limbang', 'Mukah', 'Betong', 'Kapit', 'Samarahan', 'Sri Aman']),
        PilotLocation(code: 'TRG', name: 'Terengganu', cities: ['Kuala Terengganu', 'Kemaman', 'Dungun', 'Marang', 'Hulu Terengganu', 'Setiu', 'Besut', 'Kuala Nerus', 'Kuala Berang', 'Ajil']),
      ],
    ),
    PilotCountry(
      code: 'ZA',
      name: 'South Africa',
      states: [
        PilotLocation(code: 'WC', name: 'Western Cape', cities: ['Cape Town', 'Stellenbosch', 'Paarl', 'Worcester', 'George', 'Mossel Bay', 'Oudtshoorn', 'Knysna', 'Hermanus', 'Saldanha']),
        PilotLocation(code: 'EC', name: 'Eastern Cape', cities: ['Port Elizabeth', 'East London', 'Uitenhage', 'King Williams Town', 'Mthatha', 'Jeffreys Bay', 'Grahamstown', 'Queenstown', 'Butterworth', 'Cradock']),
        PilotLocation(code: 'KZN', name: 'KwaZulu-Natal', cities: ['Durban', 'Pietermaritzburg', 'Newcastle', 'Pinetown', 'Chatsworth', 'Umlazi', 'Phoenix', 'Westville', 'Amanzimtoti', 'Ballito']),
        PilotLocation(code: 'GP', name: 'Gauteng', cities: ['Johannesburg', 'Pretoria', 'Soweto', 'Sandton', 'Randburg', 'Roodepoort', 'Benoni', 'Germiston', 'Kempton Park', 'Centurion']),
        PilotLocation(code: 'FS', name: 'Free State', cities: ['Bloemfontein', 'Welkom', 'Kroonstad', 'Bethlehem', 'Sasolburg', 'Virginia', 'Phuthaditjhaba', 'Qwaqwa', 'Harrismith', 'Klerksdorp']),
        PilotLocation(code: 'NW', name: 'North West', cities: ['Mahikeng', 'Potchefstroom', 'Klerksdorp', 'Rustenburg', 'Brits', 'Klerksdorp', 'Vryburg', 'Lichtenburg', 'Zeerust', 'Mmabatho']),
        PilotLocation(code: 'NC', name: 'Northern Cape', cities: ['Kimberley', 'Upington', 'Kuruman', 'Springbok', 'De Aar', 'Colesberg', 'Prieska', 'Calvinia', 'Pofadder', 'Kakamas']),
        PilotLocation(code: 'LP', name: 'Limpopo', cities: ['Polokwane', 'Tzaneen', 'Lephalale', 'Mokopane', 'Thohoyandou', 'Musina', 'Louis Trichardt', 'Modimolle', 'Bela-Bela', 'Makhado']),
        PilotLocation(code: 'MP', name: 'Mpumalanga', cities: ['Nelspruit', 'Witbank', 'Secunda', 'Middelburg', 'Standerton', 'Bethal', 'Ermelo', 'Sabie', 'Hazyview', 'White River']),
      ],
    ),
    PilotCountry(
      code: 'KE',
      name: 'Kenya',
      states: [
        PilotLocation(code: 'NBI', name: 'Nairobi', cities: ['Nairobi', 'Eastleigh', 'Westlands', 'Karen', 'Runda', 'Lavington', 'Kilimani', 'Kileleshwa', 'South B', 'South C']),
        PilotLocation(code: 'MSA', name: 'Mombasa', cities: ['Mombasa', 'Kilifi', 'Malindi', 'Lamu', 'Watamu', 'Diani', 'Ukunda', 'Mtwapa', 'Bamburi', 'Nyali']),
        PilotLocation(code: 'KIS', name: 'Kisumu', cities: ['Kisumu', 'Kakamega', 'Bungoma', 'Vihiga', 'Busia', 'Siaya', 'Migori', 'Homa Bay', 'Kisii', 'Nyamira']),
        PilotLocation(code: 'NAK', name: 'Nakuru', cities: ['Nakuru', 'Naivasha', 'Narok', 'Kajiado', 'Kericho', 'Bomet', 'Nandi', 'Uasin Gishu', 'Trans Nzoia', 'West Pokot']),
        PilotLocation(code: 'MER', name: 'Meru', cities: ['Meru', 'Embu', 'Tharaka Nithi', 'Isiolo', 'Marsabit', 'Garissa', 'Wajir', 'Mandera', 'Tana River', 'Lamu']),
        PilotLocation(code: 'ELD', name: 'Eldoret', cities: ['Eldoret', 'Kitale', 'Kapenguria', 'Lodwar', 'Kakuma', 'Lokichoggio', 'Lokichar', 'Kainuk', 'Lokori', 'Lokichar']),
        PilotLocation(code: 'NYE', name: 'Nyeri', cities: ['Nyeri', 'Murang\'a', 'Kirinyaga', 'Nyeri', 'Kiambu', 'Machakos', 'Makueni', 'Kitui', 'Taita Taveta', 'Kwale']),
        PilotLocation(code: 'KIT', name: 'Kitale', cities: ['Kitale', 'Kapenguria', 'Lodwar', 'Kakuma', 'Lokichoggio', 'Lokichar', 'Kainuk', 'Lokori', 'Lokichar', 'Lokichar']),
      ],
    ),
    PilotCountry(
      code: 'BR',
      name: 'Brazil',
      states: [
        PilotLocation(code: 'SP', name: 'São Paulo', cities: ['São Paulo', 'Guarulhos', 'Campinas', 'Santo André', 'Osasco', 'Ribeirão Preto', 'Sorocaba', 'Mauá', 'São José dos Campos', 'Mogi das Cruzes']),
        PilotLocation(code: 'RJ', name: 'Rio de Janeiro', cities: ['Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu', 'Niterói', 'Belford Roxo', 'São João de Meriti', 'Campos dos Goytacazes', 'Petrópolis', 'Volta Redonda']),
        PilotLocation(code: 'MG', name: 'Minas Gerais', cities: ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Betim', 'Montes Claros', 'Ribeirão das Neves', 'Uberaba', 'Governador Valadares', 'Ipatinga']),
        PilotLocation(code: 'BA', name: 'Bahia', cities: ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari', 'Juazeiro', 'Ilhéus', 'Lauro de Freitas', 'Itabuna', 'Jequié', 'Alagoinhas']),
        PilotLocation(code: 'PR', name: 'Paraná', cities: ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Cascavel', 'São José dos Pinhais', 'Foz do Iguaçu', 'Colombo', 'Guarapuava', 'Paranaguá']),
        PilotLocation(code: 'RS', name: 'Rio Grande do Sul', cities: ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Canoas', 'Santa Maria', 'Gravataí', 'Viamão', 'Novo Hamburgo', 'São Leopoldo', 'Rio Grande']),
        PilotLocation(code: 'PE', name: 'Pernambuco', cities: ['Recife', 'Jaboatão dos Guararapes', 'Olinda', 'Caruaru', 'Petrolina', 'Paulista', 'Cabo de Santo Agostinho', 'Camaragibe', 'Garanhuns', 'Vitória de Santo Antão']),
        PilotLocation(code: 'CE', name: 'Ceará', cities: ['Fortaleza', 'Caucaia', 'Juazeiro do Norte', 'Maracanaú', 'Sobral', 'Crato', 'Itapipoca', 'Maranguape', 'Iguatu', 'Quixadá']),
        PilotLocation(code: 'PA', name: 'Pará', cities: ['Belém', 'Ananindeua', 'Santarém', 'Marabá', 'Parauapebas', 'Castanhal', 'Abaetetuba', 'Cametá', 'Marituba', 'Bragança']),
        PilotLocation(code: 'GO', name: 'Goiás', cities: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde', 'Luziânia', 'Águas Lindas de Goiás', 'Valparaíso de Goiás', 'Trindade', 'Formosa', 'Novo Gama']),
      ],
    ),
    PilotCountry(
      code: 'NZ',
      name: 'New Zealand',
      states: [
        PilotLocation(code: 'AUK', name: 'Auckland', cities: ['Auckland', 'Manukau', 'North Shore', 'Waitakere', 'Papakura', 'Franklin', 'Rodney', 'Hibiscus Coast', 'East Auckland', 'West Auckland']),
        PilotLocation(code: 'WGN', name: 'Wellington', cities: ['Wellington', 'Lower Hutt', 'Upper Hutt', 'Porirua', 'Kapiti Coast', 'Masterton', 'Carterton', 'South Wairarapa', 'Tararua', 'Horowhenua']),
        PilotLocation(code: 'CAN', name: 'Canterbury', cities: ['Christchurch', 'Timaru', 'Ashburton', 'Rangiora', 'Kaiapoi', 'Rolleston', 'Lincoln', 'Leeston', 'Darfield', 'Oxford']),
        PilotLocation(code: 'WAI', name: 'Waikato', cities: ['Hamilton', 'Tauranga', 'Rotorua', 'Taupo', 'Cambridge', 'Te Awamutu', 'Matamata', 'Morrinsville', 'Thames', 'Paeroa']),
        PilotLocation(code: 'BAY', name: 'Bay of Plenty', cities: ['Tauranga', 'Rotorua', 'Whakatane', 'Kawerau', 'Opotiki', 'Te Puke', 'Katikati', 'Waihi Beach', 'Mount Maunganui', 'Papamoa']),
        PilotLocation(code: 'MAN', name: 'Manawatu-Wanganui', cities: ['Palmerston North', 'Whanganui', 'Levin', 'Feilding', 'Marton', 'Taihape', 'Ohakune', 'Raetihi', 'Bulls', 'Foxton']),
        PilotLocation(code: 'OTA', name: 'Otago', cities: ['Dunedin', 'Oamaru', 'Queenstown', 'Wanaka', 'Alexandra', 'Cromwell', 'Balclutha', 'Milton', 'Lawrence', 'Roxburgh']),
        PilotLocation(code: 'SAS', name: 'Southland', cities: ['Invercargill', 'Gore', 'Te Anau', 'Bluff', 'Riverton', 'Winton', 'Mataura', 'Wyndham', 'Edendale', 'Lumsden']),
      ],
    ),
    PilotCountry(
      code: 'CA',
      name: 'Canada',
      states: [
        PilotLocation(code: 'ON', name: 'Ontario', cities: ['Toronto', 'Ottawa', 'Mississauga', 'Hamilton', 'Brampton', 'London', 'Markham', 'Vaughan', 'Kitchener', 'Windsor']),
        PilotLocation(code: 'QC', name: 'Quebec', cities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke', 'Saguenay', 'Lévis', 'Trois-Rivières', 'Terrebonne']),
        PilotLocation(code: 'BC', name: 'British Columbia', cities: ['Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Abbotsford', 'Coquitlam', 'Saanich', 'Delta', 'Kelowna', 'Langley']),
        PilotLocation(code: 'AB', name: 'Alberta', cities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'St. Albert', 'Medicine Hat', 'Grande Prairie', 'Airdrie', 'Spruce Grove', 'Leduc']),
        PilotLocation(code: 'MB', name: 'Manitoba', cities: ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson', 'Portage la Prairie', 'Winkler', 'Selkirk', 'Morden', 'Flin Flon', 'The Pas']),
        PilotLocation(code: 'SK', name: 'Saskatchewan', cities: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'Swift Current', 'Yorkton', 'North Battleford', 'Estevan', 'Weyburn', 'Lloydminster']),
        PilotLocation(code: 'NS', name: 'Nova Scotia', cities: ['Halifax', 'Sydney', 'Dartmouth', 'Truro', 'New Glasgow', 'Glace Bay', 'Kentville', 'Amherst', 'Bridgewater', 'Yarmouth']),
        PilotLocation(code: 'NB', name: 'New Brunswick', cities: ['Moncton', 'Saint John', 'Fredericton', 'Dieppe', 'Riverview', 'Shediac', 'Oromocto', 'Bathurst', 'Miramichi', 'Campbellton']),
        PilotLocation(code: 'NL', name: 'Newfoundland and Labrador', cities: ['St. John\'s', 'Mount Pearl', 'Conception Bay South', 'Corner Brook', 'Grand Falls-Windsor', 'Gander', 'Happy Valley-Goose Bay', 'Labrador City', 'Stephenville', 'Clarenville']),
        PilotLocation(code: 'PE', name: 'Prince Edward Island', cities: ['Charlottetown', 'Summerside', 'Stratford', 'Cornwall', 'Montague', 'Kensington', 'Souris', 'Alberton', 'Tignish', 'O\'Leary']),
      ],
    ),
    PilotCountry(
      code: 'EG',
      name: 'Egypt',
      states: [
        PilotLocation(code: 'CAI', name: 'Cairo', cities: ['Cairo', 'Giza', 'Shubra El Kheima', 'Port Said', 'Suez', 'Luxor', 'Mansoura', 'El Mahalla El Kubra', 'Tanta', 'Asyut']),
        PilotLocation(code: 'ALX', name: 'Alexandria', cities: ['Alexandria', 'Borg El Arab', 'New Borg El Arab', 'Abu Qir', 'El Amreya', 'El Agamy', 'El Dekheila', 'El Montaza', 'El Raml', 'El Shatby']),
        PilotLocation(code: 'ASW', name: 'Aswan', cities: ['Aswan', 'Kom Ombo', 'Edfu', 'Abu Simbel', 'Kalabsha', 'Philae', 'Elephantine', 'Kitchener Island', 'Nubian Museum', 'High Dam']),
        PilotLocation(code: 'ASN', name: 'Assiut', cities: ['Assiut', 'Abnub', 'Abu Tig', 'El Badari', 'El Fath', 'El Ghanayem', 'El Qusiya', 'Manfalut', 'Sohag', 'Akhmim']),
        PilotLocation(code: 'BEH', name: 'Beheira', cities: ['Damanhur', 'Kafr El Dawwar', 'Rashid', 'Edku', 'Abu El Matamir', 'El Delengat', 'El Mahmoudiyah', 'El Rahmaniyah', 'Itay El Barud', 'Kom Hamada']),
        PilotLocation(code: 'BEN', name: 'Beni Suef', cities: ['Beni Suef', 'Biba', 'El Fashn', 'El Wasta', 'Ihnasya', 'Nasser', 'Samasta', 'El Adwa', 'El Minya', 'Maghagha']),
        PilotLocation(code: 'DAK', name: 'Dakahlia', cities: ['Mansoura', 'Talkha', 'El Senbellawein', 'Aga', 'El Gamaliya', 'El Matareya', 'El Manzala', 'El Kurdi', 'El Qanater El Khayreya', 'Bani Ebeid']),
        PilotLocation(code: 'DAM', name: 'Damietta', cities: ['Damietta', 'El Zarqa', 'Kafr El Battikh', 'El Zawya', 'El Rasheed', 'El Senbellawein', 'El Gamaliya', 'El Matareya', 'El Manzala', 'El Kurdi']),
        PilotLocation(code: 'FYM', name: 'Fayyum', cities: ['Fayyum', 'Tamiya', 'Sinnuris', 'Ibsheway', 'Itsa', 'El Atsa', 'El Senbellawein', 'El Gamaliya', 'El Matareya', 'El Manzala']),
      ],
    ),
    PilotCountry(
      code: 'KH',
      name: 'Cambodia',
      states: [
        PilotLocation(code: 'PP', name: 'Phnom Penh', cities: ['Phnom Penh', 'Chbar Ampov', 'Chroy Changvar', 'Dangkao', 'Kambol', 'Koh Pich', 'Mean Chey', 'Prampi Makara', 'Russey Keo', 'Sen Sok']),
        PilotLocation(code: 'BTB', name: 'Battambang', cities: ['Battambang', 'Banan', 'Bavel', 'Ek Phnom', 'Moung Ruessei', 'Rotonak Mondol', 'Sangkae', 'Samlout', 'Sampov Loun', 'Thma Koul']),
        PilotLocation(code: 'KEP', name: 'Kep', cities: ['Kep', 'Damnak Chang\'aeur', 'Kep City', 'Kep Beach', 'Kep National Park', 'Kep Crab Market', 'Kep Salt Fields', 'Kep Fishing Village', 'Kep Resort', 'Kep Villa']),
        PilotLocation(code: 'KOH', name: 'Koh Kong', cities: ['Koh Kong', 'Botum Sakor', 'Kiri Sakor', 'Sre Ambel', 'Thma Bang', 'Koh Kong City', 'Koh Kong Beach', 'Koh Kong Island', 'Koh Kong Resort', 'Koh Kong Villa']),
        PilotLocation(code: 'KMT', name: 'Kampot', cities: ['Kampot', 'Angkor Chey', 'Banteay Meas', 'Chhuk', 'Chum Kiri', 'Dang Tong', 'Kampong Trach', 'Kampong Bay', 'Kampong Seila', 'Kampong Thom']),
        PilotLocation(code: 'KAN', name: 'Kandal', cities: ['Ta Khmau', 'Kandal Stueng', 'Ang Snuol', 'Baray', 'Kandal Stueng', 'Koh Thom', 'Leuk Daek', 'Mukh Kampul', 'Ponhea Lueu', 'S\'ang']),
        PilotLocation(code: 'KOS', name: 'Kampong Speu', cities: ['Kampong Speu', 'Basedth', 'Kong Pisei', 'Oudong', 'Phnom Sruoch', 'Samraong Tong', 'Thpong', 'Kampong Speu City', 'Kampong Speu Beach', 'Kampong Speu Resort']),
        PilotLocation(code: 'KST', name: 'Kampong Thom', cities: ['Kampong Thom', 'Baray', 'Kampong Svay', 'Prasat Balangk', 'Prasat Sambor', 'Prasat Preah Vihear', 'Prasat Koh Ker', 'Prasat Banteay Srei', 'Prasat Angkor Wat', 'Prasat Bayon']),
      ],
    ),
    PilotCountry(
      code: 'CN',
      name: 'China',
      states: [
        PilotLocation(code: 'BJ', name: 'Beijing', cities: ['Beijing', 'Chaoyang', 'Haidian', 'Fengtai', 'Shijingshan', 'Mentougou', 'Fangshan', 'Tongzhou', 'Shunyi', 'Changping']),
        PilotLocation(code: 'SH', name: 'Shanghai', cities: ['Shanghai', 'Huangpu', 'Xuhui', 'Changning', 'Jing\'an', 'Putuo', 'Hongkou', 'Yangpu', 'Minhang', 'Baoshan']),
        PilotLocation(code: 'GD', name: 'Guangdong', cities: ['Guangzhou', 'Shenzhen', 'Dongguan', 'Foshan', 'Zhongshan', 'Zhuhai', 'Jiangmen', 'Zhaoqing', 'Huizhou', 'Shanwei']),
        PilotLocation(code: 'JS', name: 'Jiangsu', cities: ['Nanjing', 'Suzhou', 'Wuxi', 'Changzhou', 'Zhenjiang', 'Yangzhou', 'Taizhou', 'Nantong', 'Lianyungang', 'Suqian']),
        PilotLocation(code: 'ZJ', name: 'Zhejiang', cities: ['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Huzhou', 'Shaoxing', 'Jinhua', 'Quzhou', 'Zhoushan', 'Taizhou']),
        PilotLocation(code: 'SD', name: 'Shandong', cities: ['Jinan', 'Qingdao', 'Yantai', 'Weifang', 'Jining', 'Tai\'an', 'Weihai', 'Dezhou', 'Liaocheng', 'Linyi']),
        PilotLocation(code: 'HE', name: 'Hebei', cities: ['Shijiazhuang', 'Tangshan', 'Qinhuangdao', 'Handan', 'Xingtai', 'Baoding', 'Zhangjiakou', 'Chengde', 'Cangzhou', 'Langfang']),
        PilotLocation(code: 'HB', name: 'Hubei', cities: ['Wuhan', 'Huangshi', 'Shiyan', 'Yichang', 'Xiangyang', 'Ezhou', 'Jingmen', 'Xiaogan', 'Huanggang', 'Xianning']),
        PilotLocation(code: 'HN', name: 'Hunan', cities: ['Changsha', 'Zhuzhou', 'Xiangtan', 'Hengyang', 'Shaoyang', 'Yueyang', 'Changde', 'Zhangjiajie', 'Yiyang', 'Chenzhou']),
        PilotLocation(code: 'SC', name: 'Sichuan', cities: ['Chengdu', 'Zigong', 'Panzhihua', 'Luzhou', 'Deyang', 'Mianyang', 'Guangyuan', 'Suining', 'Neijiang', 'Leshan']),
      ],
    ),
  ];

  // Helper functions
  static PilotCountry? getPilotCountry(String countryCode) {
    try {
      return pilotCountriesData.firstWhere(
        (country) => country.code == countryCode,
      );
    } catch (e) {
      return null;
    }
  }

  static List<PilotLocation> getStatesByCountry(String countryCode) {
    final country = getPilotCountry(countryCode);
    return country?.states ?? [];
  }

  static List<String> getCitiesByState(String countryCode, String stateCode) {
    final country = getPilotCountry(countryCode);
    if (country == null) return [];
    
    try {
      final state = country.states.firstWhere(
        (s) => s.code == stateCode,
      );
      return state.cities;
    } catch (e) {
      return [];
    }
  }
}
