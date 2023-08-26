import "./award.css";

function Award() {
  return (
    <div className="award_container d-flex align-items-center gap-5">
      <div className="single_award w-50">
        <div className="award_year">2022</div>
        <h6 className="award_title">
          Asisten Tutor <span>workshop pemrograman </span>
        </h6>
      </div>

      <div className="single_award w-50">
        <div className="award_year">2023</div>
        <h6 className="award_title">
          Sertifikat HKI <span>Hibah Aplikasi</span>
        </h6>
      </div>
    </div>
  );
}

export default Award;
