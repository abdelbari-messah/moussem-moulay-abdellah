"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

function Section2() {
  const [isTab, setIsTab] = useState(1);
  const handleTab = (i: number) => {
    setIsTab(i);
  };

  const t = useTranslations("Schedule2024Page.section2");

  return (
    <div className="event1-section-area sp1">
      <div className="row">
        <div className="col-lg-12">
          <div data-aos="fade-up" data-aos-duration={900}>
            <ul
              className="nav nav-pills space-margin60"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" onClick={() => handleTab(1)}>
                <button
                  className={isTab == 1 ? "nav-link active" : "nav-link"}
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <span className="day">{t("days.day1")}</span>
                  <span className="vl-flex">
                    <span className="cal">08</span>
                    <span className="date">
                      {t("months.aug")}
                      <br />
                      2024
                    </span>
                  </span>
                </button>
              </li>
              <li className="nav-item" onClick={() => handleTab(2)}>
                <button
                  className={isTab == 2 ? "nav-link active" : "nav-link"}
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  <span className="day">{t("days.day2")}</span>
                  <span className="vl-flex">
                    <span className="cal">09</span>
                    <span className="date">
                      {t("months.aug")}
                      <br />
                      2024
                    </span>
                  </span>
                </button>
              </li>
              <li className="nav-item" onClick={() => handleTab(3)}>
                <button
                  className={isTab == 3 ? "nav-link active" : "nav-link"}
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <span className="day">{t("days.day3")}</span>
                  <span className="vl-flex">
                    <span className="cal">10</span>
                    <span className="date">
                      {t("months.aug")} <br />
                      2024
                    </span>
                  </span>
                </button>
              </li>
              <li className="nav-item" onClick={() => handleTab(4)}>
                <button
                  className={isTab == 4 ? "nav-link active" : "nav-link"}
                  id="pills-contact1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact1"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact1"
                  aria-selected="false"
                >
                  <span className="day">{t("days.day4")}</span>
                  <span className="vl-flex">
                    <span className="cal">11</span>
                    <span className="date">
                      {t("months.aug")} <br />
                      2024
                    </span>
                  </span>
                </button>
              </li>
              <li className="nav-item" onClick={() => handleTab(5)}>
                <button
                  className={isTab == 5 ? "nav-link active" : "nav-link"}
                  id="pills-contact2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact2"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact2"
                  aria-selected="false"
                >
                  <span className="day">{t("days.day5")}</span>
                  <span className="vl-flex">
                    <span className="cal">12</span>
                    <span className="date">
                      {t("months.aug")} <br />
                      2024
                    </span>
                  </span>
                </button>
              </li>
              <li className="nav-item" onClick={() => handleTab(6)}>
                <button
                  className={isTab == 6 ? "nav-link active" : "nav-link"}
                  id="pills-contact2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact2"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact2"
                  aria-selected="false"
                >
                  <span className="day">{t("days.day6")}</span>
                  <span className="vl-flex">
                    <span className="cal">13</span>
                    <span className="date">
                      {t("months.aug")} <br />
                      2024
                    </span>
                  </span>
                </button>
              </li>
              <li className="nav-item" onClick={() => handleTab(7)}>
                <button
                  className={isTab == 7 ? "nav-link active" : "nav-link"}
                  id="pills-contact2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact2"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact2"
                  aria-selected="false"
                >
                  <span className="day">{t("days.day7")}</span>
                  <span className="vl-flex">
                    <span className="cal">14</span>
                    <span className="date">
                      {t("months.aug")} <br />
                      2024
                    </span>
                  </span>
                </button>
              </li>
              <li className="nav-item" onClick={() => handleTab(8)}>
                <button
                  className={isTab == 8 ? "nav-link active" : "nav-link"}
                  id="pills-contact2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact2"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact2"
                  aria-selected="false"
                >
                  <span className="day">{t("days.day8")}</span>
                  <span className="vl-flex">
                    <span className="cal">15</span>
                    <span className="date">
                      {t("months.aug")} <br />
                      2024
                    </span>
                  </span>
                </button>
              </li>
              <li className="nav-item" onClick={() => handleTab(9)}>
                <button
                  className={isTab == 9 ? "nav-link active" : "nav-link"}
                  id="pills-contact2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact2"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact2"
                  aria-selected="false"
                >
                  <span className="day">{t("days.day9")}</span>
                  <span className="vl-flex">
                    <span className="cal">16</span>
                    <span className="date">
                      {t("months.aug")}
                      <br />
                      2024
                    </span>
                  </span>
                </button>
              </li>
              <li className="nav-item" onClick={() => handleTab(10)}>
                <button
                  className={isTab == 10 ? "nav-link active" : "nav-link"}
                  id="pills-contact2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact2"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact2"
                  aria-selected="false"
                >
                  <span className="day">{t("days.day10")}</span>
                  <span className="vl-flex">
                    <span className="cal">17</span>
                    <span className="date">
                      {t("months.aug")}
                      <br />
                      2024
                    </span>
                  </span>
                </button>
              </li>
              <li className="nav-item" onClick={() => handleTab(11)}>
                <button
                  className={isTab == 11 ? "nav-link active" : "nav-link"}
                  id="pills-contact2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact2"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact2"
                  aria-selected="false"
                >
                  <span className="day">{t("days.day2")}</span>
                  <span className="vl-flex">
                    <span className="cal">18</span>
                    <span className="date">
                      {t("months.aug")}
                      <br />
                      2024
                    </span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
          {isTab == 1 && (
            <div className="schedule-section-area sp10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 m-auto">
                    <div className="schedule">
                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "#a88a7b",
                          display: "flex",
                          justifyContent: "flex-start",
                          letterSpacing: 1,
                        }}
                        className="table-header"
                      >
                        <div
                          style={{
                            backgroundColor: "#e2d7d1",
                            paddingTop: 22,
                            paddingBottom: 22,
                            width: "30%",
                          }}
                        >
                          {t("dates.program")}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1,
                            backgroundColor: "#a88a7b",
                          }}
                        >
                          {t("dates.aug8")}
                        </div>
                      </div>
                      <div className="table-body">
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderWidth: 1,
                            borderStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.religious")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderRightStyle: "solid",
                            borderTopStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day1.religious.religious1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                            }}
                            className="content-section"
                          >
                            {t("programs.day1.religious.religious2")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isTab == 2 && (
            <div className="schedule-section-area sp10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 m-auto">
                    <div className="schedule">
                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "#a88a7b",
                          display: "flex",
                          justifyContent: "flex-start",
                          letterSpacing: 1,
                        }}
                        className="table-header"
                      >
                        <div
                          style={{
                            backgroundColor: "#e2d7d1",
                            paddingTop: 22,
                            paddingBottom: 22,
                            width: "30%",
                          }}
                        >
                          {t("dates.program")}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1,
                            backgroundColor: "#a88a7b",
                          }}
                        >
                          {t("dates.aug9")}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderWidth: 1,
                            borderStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.religious")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderRightStyle: "solid",
                            borderTopStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day2.religious.religious1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                            }}
                            className="content-section"
                          >
                            {t("programs.day2.religious.religious2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                            }}
                            className="content-section"
                          >
                            {t("programs.day2.religious.religious3")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                            }}
                            className="content-section"
                          >
                            {t("programs.day2.religious.religious4")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.artistic")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                            }}
                            className="content-section"
                          >
                            {t("programs.day2.artistic.artistic1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                            }}
                            className="content-section"
                          >
                            {t("programs.day2.artistic.artistic2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day2.artistic.artistic3")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day2.artistic.artistic4")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.tbourida")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 44,
                              paddingBottom: 44,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                            }}
                            className="content-section"
                          >
                            {t("programs.day2.tbourida.tbourida1")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isTab == 3 && (
            <div className="schedule-section-area sp10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 m-auto">
                    <div className="schedule">
                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "#a88a7b",
                          display: "flex",
                          justifyContent: "flex-start",
                          letterSpacing: 1,
                        }}
                        className="table-header"
                      >
                        <div
                          style={{
                            backgroundColor: "#e2d7d1",
                            paddingTop: 22,
                            paddingBottom: 22,
                            width: "30%",
                          }}
                        >
                          {t("dates.program")}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1,
                            backgroundColor: "#a88a7b",
                          }}
                        >
                          {t("dates.aug10")}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderWidth: 1,
                            borderStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.religious")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderRightStyle: "solid",
                            borderTopStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                            }}
                            className="content-section"
                          >
                            {t("programs.day3.religious.religious1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day3.religious.religious2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day3.religious.religious3")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.artistic")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day3.artistic.artistic1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day3.artistic.artistic2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day3.artistic.artistic3")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day3.artistic.artistic4")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.tbourida")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 44,
                              paddingBottom: 44,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day3.tbourida.tbourida1")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isTab == 4 && (
            <div className="schedule-section-area sp10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 m-auto">
                    <div className="schedule">
                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "#a88a7b",
                          display: "flex",
                          justifyContent: "flex-start",
                          letterSpacing: 1,
                        }}
                        className="table-header"
                      >
                        <div
                          style={{
                            backgroundColor: "#e2d7d1",
                            paddingTop: 22,
                            paddingBottom: 22,
                            width: "30%",
                          }}
                        >
                          {t("dates.program")}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1,
                            backgroundColor: "#a88a7b",
                          }}
                        >
                          {t("dates.aug11")}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderWidth: 1,
                            borderStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.religious")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderRightStyle: "solid",
                            borderTopStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day4.religious.religious1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day4.religious.religious2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day4.religious.religious3")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day4.religious.religious4")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.artistic")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              justifyContent: "flex-start",
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day4.artistic.artistic1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                            }}
                            className="content-section"
                          >
                            {t("programs.day4.artistic.artistic1")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.tbourida")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 44,
                              paddingBottom: 44,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day4.tbourida.tbourida1")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isTab == 5 && (
            <div className="schedule-section-area sp10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 m-auto">
                    <div className="schedule">
                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "#a88a7b",
                          display: "flex",
                          justifyContent: "flex-start",
                          letterSpacing: 1,
                        }}
                        className="table-header"
                      >
                        <div
                          style={{
                            backgroundColor: "#e2d7d1",
                            paddingTop: 22,
                            paddingBottom: 22,
                            width: "30%",
                          }}
                        >
                          {t("dates.program")}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1,
                            backgroundColor: "#a88a7b",
                          }}
                        >
                          {t("dates.aug12")}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderWidth: 1,
                            borderStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.religious")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderRightStyle: "solid",
                            borderTopStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day5.religious.religious1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day5.religious.religious2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day5.religious.religious3")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day5.religious.religious4")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.artistic")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day5.artistic.artistic1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day5.artistic.artistic2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day5.artistic.artistic3")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.tbourida")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 44,
                              paddingBottom: 44,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day5.tbourida.tbourida1")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isTab == 6 && (
            <div className="schedule-section-area sp10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 m-auto">
                    <div className="schedule">
                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "#a88a7b",
                          display: "flex",
                          justifyContent: "flex-start",
                          letterSpacing: 1,
                        }}
                        className="table-header"
                      >
                        <div
                          style={{
                            backgroundColor: "#e2d7d1",
                            paddingTop: 22,
                            paddingBottom: 22,
                            width: "30%",
                          }}
                        >
                          {t("dates.program")}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1,
                            backgroundColor: "#a88a7b",
                          }}
                        >
                          {t("dates.aug13")}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderWidth: 1,
                            borderStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.religious")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderRightStyle: "solid",
                            borderTopStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day6.religious.religious1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day6.religious.religious2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day6.religious.religious3")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day6.religious.religious4")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.artistic")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day6.artistic.artistic1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day6.artistic.artistic2")}
                            Jil Alaita (EL JADIDA)
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day6.artistic.artistic3")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day6.artistic.artistic4")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.tbourida")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 44,
                              paddingBottom: 44,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day6.tbourida.tbourida1")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isTab == 7 && (
            <div className="schedule-section-area sp10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 m-auto">
                    <div className="schedule">
                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "#a88a7b",
                          display: "flex",
                          justifyContent: "flex-start",
                          letterSpacing: 1,
                        }}
                        className="table-header"
                      >
                        <div
                          style={{
                            backgroundColor: "#e2d7d1",
                            paddingTop: 22,
                            paddingBottom: 22,
                            width: "30%",
                          }}
                        >
                          {t("dates.program")}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1,
                            backgroundColor: "#a88a7b",
                          }}
                        >
                          {t("dates.aug14")}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderWidth: 1,
                            borderStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.religious")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderRightStyle: "solid",
                            borderTopStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              justifyContent: "flex-start",
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day7.religious.religious1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day7.religious.religious2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day7.religious.religious3")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.artistic")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day7.artistic.artistic1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day7.artistic.artistic2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day7.artistic.artistic3")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day7.artistic.artistic4")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.tbourida")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 44,
                              paddingBottom: 44,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day7.tbourida.tbourida1")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isTab == 8 && (
            <div className="schedule-section-area sp10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 m-auto">
                    <div className="schedule">
                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "#a88a7b",
                          display: "flex",
                          justifyContent: "flex-start",
                          letterSpacing: 1,
                        }}
                        className="table-header"
                      >
                        <div
                          style={{
                            backgroundColor: "#e2d7d1",
                            paddingTop: 22,
                            paddingBottom: 22,
                            width: "30%",
                          }}
                        >
                          {t("dates.program")}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1,
                            backgroundColor: "#a88a7b",
                          }}
                        >
                          {t("dates.aug15")}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderWidth: 1,
                            borderStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.religious")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderRightStyle: "solid",
                            borderTopStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day8.religious.religious1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day8.religious.religious2")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.artistic")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day8.artistic.artistic1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day8.artistic.artistic2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day8.artistic.artistic3")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day8.artistic.artistic4")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.tbourida")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 44,
                              paddingBottom: 44,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day8.tbourida.tbourida1")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isTab == 9 && (
            <div className="schedule-section-area sp10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 m-auto">
                    <div className="schedule">
                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "#a88a7b",
                          display: "flex",
                          justifyContent: "flex-start",
                          letterSpacing: 1,
                        }}
                        className="table-header"
                      >
                        <div
                          style={{
                            backgroundColor: "#e2d7d1",
                            paddingTop: 22,
                            paddingBottom: 22,
                            width: "30%",
                          }}
                        >
                          {t("dates.program")}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1,
                            backgroundColor: "#a88a7b",
                          }}
                        >
                          {t("dates.aug16")}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderWidth: 1,
                            borderStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.religious")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderRightStyle: "solid",
                            borderTopStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day9.religious.religious1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              lineHeight: 1.8,
                              textAlign: "left",
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              paddingRight: 10,
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day9.religious.religious2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day9.religious.religious3")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.artistic")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day9.artistic.artistic1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                            }}
                            className="content-section"
                          >
                            {t("programs.day9.artistic.artistic2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day9.artistic.artistic3")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day9.artistic.artistic4")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.tbourida")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 44,
                              paddingBottom: 44,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day9.tbourida.tbourida1")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isTab == 10 && (
            <div className="schedule-section-area sp10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 m-auto">
                    <div className="schedule">
                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "#a88a7b",
                          display: "flex",
                          justifyContent: "flex-start",
                          letterSpacing: 1,
                        }}
                        className="table-header"
                      >
                        <div
                          style={{
                            backgroundColor: "#e2d7d1",
                            paddingTop: 22,
                            paddingBottom: 22,
                            width: "30%",
                          }}
                        >
                          {t("dates.program")}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1,
                            backgroundColor: "#a88a7b",
                          }}
                        >
                          {t("dates.aug17")}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderWidth: 1,
                            borderStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.religious")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderRightStyle: "solid",
                            borderTopStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day10.religious.religious1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day10.religious.religious2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day10.religious.religious3")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.artistic")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              justifyContent: "flex-start",
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day10.artistic.artistic1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              justifyContent: "flex-start",
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day10.artistic.artistic2")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day10.artistic.artistic3")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day10.artistic.artistic4")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.tbourida")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 44,
                              paddingBottom: 44,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                            }}
                            className="content-section"
                          >
                            {t("programs.day10.tbourida.tbourida1")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isTab == 11 && (
            <div className="schedule-section-area sp10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 m-auto">
                    <div className="schedule">
                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "#a88a7b",
                          display: "flex",
                          justifyContent: "flex-start",
                          letterSpacing: 1,
                        }}
                        className="table-header"
                      >
                        <div
                          style={{
                            backgroundColor: "#e2d7d1",
                            paddingTop: 22,
                            paddingBottom: 22,
                            width: "30%",
                          }}
                        >
                          {t("dates.program")}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1,
                            backgroundColor: "#a88a7b",
                          }}
                        >
                          {t("dates.aug18")}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderWidth: 1,
                            borderStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.religious")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderRightStyle: "solid",
                            borderTopStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day11.religious.religious1")}
                          </div>
                          <div
                            style={{
                              paddingTop: 32,
                              paddingBottom: 32,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#ccc",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                            }}
                            className="content-section"
                          >
                            {t("programs.day11.religious.religious2")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                        className="table-body"
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            paddingTop: 40,
                            paddingBottom: 40,
                            width: "30%",
                            borderColor: "#ccc",
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderRightStyle: "solid",
                            borderLeftStyle: "solid",
                            borderBottomStyle: "solid",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="program-section"
                        >
                          <span>{t("programTypes.tbourida")}</span>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            borderColor: "#ccc",
                            borderRightWidth: 1,
                            borderRightStyle: "solid",
                            backgroundColor: "#fff",
                          }}
                          className="content-section"
                        >
                          <div
                            style={{
                              paddingTop: 44,
                              paddingBottom: 44,
                              paddingLeft: 40,
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              display: "flex",
                              justifyContent: "flex-start",
                              paddingRight: 10,
                              textAlign: "left",
                              lineHeight: 1.8,
                              alignItems: "center",
                              borderBottomColor: "#ccc",
                            }}
                            className="content-section"
                          >
                            {t("programs.day11.tbourida.tbourida1")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section2;
