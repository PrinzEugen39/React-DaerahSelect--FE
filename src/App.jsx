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
      const res = await fetch(
        "https://raw.githubusercontent.com/vionaaindah/GeoID-API/main/provinces.json"
      );
      const dataProvince = await res.json();

      setProvinces(dataProvince);
      // console.log(dataProvince)
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getProvince();
  }, []);

  async function getRegencies() {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/vionaaindah/GeoID-API/main/regencies.json"
      );
      const dataRegencies = await res.json();

      setRegencies(dataRegencies);
      // console.log(dataRegencies)
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getRegencies();
  }, []);

  async function getSubdisctricts() {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/vionaaindah/GeoID-API/main/districts.json"
      );
      const dataSubdisricts = await res.json();
      // console.log(dataSubdisricts)
      setSubdistricts(dataSubdisricts);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getSubdisctricts();
  }, []);

  async function getWards() {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/vionaaindah/GeoID-API/main/villages.json"
      );
      const dataWards = await res.json();
      // console.log(dataWards);
      setWard(dataWards);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getWards();
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
        content={subdistricts.filter(subdisctict => subdisctict.regency_id === selectedRegencies)}
        handleSelect={setSelectedSubdistricts}
      >
        Subdistricts
      </Place>
      <Place 
        option={"Select a ward"} 
        content={ward.filter(wards => wards.district_id === selectedSubdistricts)}
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
      <select placeholder="select" onChange={e => handleSelect && handleSelect(e.target.value)}>
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
