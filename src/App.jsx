import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./assets/App.css";

export default function App() {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvinces, setSelectedProvinces] = useState(null);
  const [regencies, setRegencies] = useState([]);
  const [selectedRegencies, setSelectedRegencies] = useState(null);
  const [subdistricts, setSubdistricts] = useState([]);
  const [selectedSubdistricts, setSelectedSubdistricts] = useState(null);
  const [ward, setWard] = useState([]);

  async function getProvince() {
    try {
      const resProvince = await fetch("https://raw.githubusercontent.com/vionaaindah/GeoID-API/main/provinces.json");
      const dataProvince = await resProvince.json();

      const resRegencies = await fetch("https://raw.githubusercontent.com/vionaaindah/GeoID-API/main/regencies.json");
      const dataRegencies = await resRegencies.json();

      const resSubdisctricts = await fetch("https://raw.githubusercontent.com/vionaaindah/GeoID-API/main/districts.json");
      const dataSubdisricts = await resSubdisctricts.json();

      const resWards = await fetch("https://raw.githubusercontent.com/vionaaindah/GeoID-API/main/villages.json");
      const dataWards = await resWards.json();

      setProvinces(dataProvince);
      setRegencies(dataRegencies);
      setSubdistricts(dataSubdisricts);
      setWard(dataWards);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getProvince();
  }, []);

  return (
    <div className="main">
      <Place
        option={"Select a province"}
        content={provinces}
        handleSelect={setSelectedProvinces}
      >
        Provinces
      </Place>
      <Place
        option={"Select a regency"}
        content={regencies.filter(
          (regency) => regency.province_id === selectedProvinces
        )}
        handleSelect={setSelectedRegencies}
      >
        Regencies
      </Place>
      <Place
        option={"Select a subdistrict"}
        content={subdistricts.filter(
          (subdisctict) => subdisctict.regency_id === selectedRegencies
        )}
        handleSelect={setSelectedSubdistricts}
      >
        Subdistricts
      </Place>
      <Place
        option={"Select a ward"}
        content={ward.filter(
          (wards) => wards.district_id === selectedSubdistricts
        )}
      >
        Wards
      </Place>
    </div>
  );
}

function Place({ children, option, content, handleSelect }) {
  return (
    <div className="container">
      <span>{children}</span>
      <select
        placeholder="select"
        onChange={(e) => handleSelect && handleSelect(e.target.value)}
      >
        <option value="" hidden>
          {option}
        </option>
        {content &&
          content.map((daerah) => (
            <option key={daerah.id} value={daerah.id}>
              {daerah.name}
            </option>
          ))}
      </select>
    </div>
  );
}

Place.propTypes = {
  children: PropTypes.node.isRequired,
  option: PropTypes.string.isRequired,
  content: PropTypes.array,
  handleSelect: PropTypes.func,
};
