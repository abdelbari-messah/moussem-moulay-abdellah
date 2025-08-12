export default function Preloader() {
  return (
    <>
      <div className="preloader">
        <div className="loading-container">
          <div className="loading" />
          <div
            id="loading-icon"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="/assets/img/logo/logo-header-white.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
