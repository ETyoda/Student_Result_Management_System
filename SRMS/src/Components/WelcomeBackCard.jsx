import PropTypes from "prop-types";
import studentImage from "../assets/student.png";

const WelcomeBackCard = ({ studentName }) => {
  return (
    <section
      className="rounded-lg p-6 text-white mb-6 flex items-center justify-between flex-1 bg-gray-100 "
      style={{ backgroundColor: "#2C437E" }}
    >
      <div className="w-full flex-grow  text-white text-center p-10">
        <h1 className="text-2xl font-bold">WELCOME BACK! {studentName}</h1>
        <p>
          stay informed about your academics! Check out your results, exam
          schedule and announcement.
        </p>
      </div>
      <div className="w-20 h-20 p-0 rounded-lg overflow-hidden">
        <img src={studentImage} alt="Student" className="w-full h-full" />
      </div>
    </section>
  );
};

WelcomeBackCard.propTypes = {
  studentName: PropTypes.string.isRequired,
};
export default WelcomeBackCard;
