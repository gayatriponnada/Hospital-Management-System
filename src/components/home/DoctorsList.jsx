import { useNavigate } from "react-router-dom";
import { doctors } from "../../assets/assets";

const DoctorsList = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-2xl  font-medium ">Top Doctors to Book</div>
        <div className="text-sm font-normal">
          Simply browse through our extensive list of trusted
        </div>
      </div>
      <div className=" flex flex-wrap  items-center justify-center gap-4   ">
        {doctors.slice(0, 9).map((doctor, index) => (
          <div
            key={index}
            className="flex flex-col gap-1  items-start w-1/5 border-blue-200  border rounded-2xl cursor-pointer transition-transform  ease-in-out hover:-translate-y-2"
          >
            <img
              className="w-full h-56 bg-blue-200 rounded-tr-2xl rounded-tl-2xl"
              src={doctor?.image}
              alt={doctor?.name}
            />
            <div className="flex flex-col items-start justify-center p-2">
              <div className="text-sm font-medium">{doctor?.name}</div>
              <div className="text-sm text-gray-500">{doctor?.speciality}</div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex justify-center items-center"
        onClick={() => navigate("/patient/dashboard/all-doctors")}
      >
        <button className="p-3 px-8 text-center text-sm rounded-3xl border border-border-primary text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors ease-in-out">
          View All Doctors
        </button>
      </div>
    </div>
  );
};

export default DoctorsList;
