import { useState } from "react";
import { useTranslations } from "use-intl";

function Section2() {
  const [isTab, setIsTab] = useState(1);

  const t = useTranslations("FaqPage");

  const handleTab = (i: number) => {
    setIsTab(i);
  };
  const [isAccordion, setIsAccordion] = useState(1);

  const handleAccordion = (key: any) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  return (
    <div className="faq-inner-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 m-auto">
            <div className="heading2 text-center space-margin60">
              <h2>{t("section2.title")}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="faq-widget-area">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className={
                    isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"
                  }
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex={0}
                >
                  <div className="faq-section-area">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="accordian-area">
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                onClick={() => handleAccordion(1)}
                              >
                                <button
                                  className={
                                    isAccordion == 1
                                      ? "accordion-button"
                                      : "accordion-button collapsed"
                                  }
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  {t("section2.question_1")}
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className={
                                  isAccordion == 1
                                    ? "accordion-collapse collapse show"
                                    : "accordion-collapse collapse"
                                }
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <p>{t("section2.answer_1")}</p>
                                </div>
                              </div>
                            </div>
                            <div className="space20" />
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                onClick={() => handleAccordion(2)}
                              >
                                <button
                                  className={
                                    isAccordion == 2
                                      ? "accordion-button"
                                      : "accordion-button collapsed"
                                  }
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  {t("section2.question_1")}
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className={
                                  isAccordion == 2
                                    ? "accordion-collapse collapse show"
                                    : "accordion-collapse collapse"
                                }
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <p>{t("section2.answer_2")}</p>
                                </div>
                              </div>
                            </div>
                            <div className="space20" />
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                onClick={() => handleAccordion(3)}
                              >
                                <button
                                  className={
                                    isAccordion == 3
                                      ? "accordion-button"
                                      : "accordion-button collapsed"
                                  }
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  <p>{t("section2.question_3")}</p>
                                </button>
                              </h2>
                              <div
                                id="collapseThree"
                                className={
                                  isAccordion == 3
                                    ? "accordion-collapse collapse show"
                                    : "accordion-collapse collapse"
                                }
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <p>{t("section2.answer_3")}</p>
                                </div>
                              </div>
                            </div>
                            <div className="space20" />
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                onClick={() => handleAccordion(4)}
                              >
                                <button
                                  className={
                                    isAccordion == 4
                                      ? "accordion-button"
                                      : "accordion-button collapsed"
                                  }
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseFour"
                                  aria-expanded="false"
                                  aria-controls="collapseFour"
                                >
                                  <p>{t("section2.question_4")}</p>
                                </button>
                              </h2>
                              <div
                                id="collapseFour"
                                className={
                                  isAccordion == 4
                                    ? "accordion-collapse collapse show"
                                    : "accordion-collapse collapse"
                                }
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <p>{t("section2.answer_4")}</p>
                                </div>
                              </div>
                            </div>
                            <div className="space20" />
                            <div
                              className="accordion-item"
                              style={{ marginBottom: 20 }}
                            >
                              <h2
                                className="accordion-header"
                                onClick={() => handleAccordion(5)}
                              >
                                <button
                                  className={
                                    isAccordion == 5
                                      ? "accordion-button"
                                      : "accordion-button collapsed"
                                  }
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseFive"
                                  aria-expanded="false"
                                  aria-controls="collapseFive"
                                >
                                  {t("section2.question_5")}
                                </button>
                              </h2>
                              <div
                                id="collapseFive"
                                className={
                                  isAccordion == 5
                                    ? "accordion-collapse collapse show"
                                    : "accordion-collapse collapse"
                                }
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <p>{t("section2.answer_5")}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="accordian-area">
                          <div className="accordion" id="accordionExample2">
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                onClick={() => handleAccordion(6)}
                              >
                                <button
                                  className={
                                    isAccordion == 6
                                      ? "accordion-button"
                                      : "accordion-button collapsed"
                                  }
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseSix"
                                  aria-expanded="true"
                                  aria-controls="collapseSix"
                                >
                                  <p>{t("section2.question_6")}</p>
                                </button>
                              </h2>
                              <div
                                id="collapseSix"
                                className={
                                  isAccordion == 6
                                    ? "accordion-collapse collapse show"
                                    : "accordion-collapse collapse"
                                }
                                data-bs-parent="#accordionExample2"
                              >
                                <div className="accordion-body">
                                  <p>{t("section2.answer_6")}</p>
                                </div>
                              </div>
                            </div>
                            <div className="space20" />
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                onClick={() => handleAccordion(7)}
                              >
                                <button
                                  className={
                                    isAccordion == 7
                                      ? "accordion-button"
                                      : "accordion-button collapsed"
                                  }
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseSeven"
                                  aria-expanded="false"
                                  aria-controls="collapseSeven"
                                >
                                  <p>{t("section2.question_7")}</p>
                                </button>
                              </h2>
                              <div
                                id="collapseSeven"
                                className={
                                  isAccordion == 7
                                    ? "accordion-collapse collapse show"
                                    : "accordion-collapse collapse"
                                }
                                data-bs-parent="#accordionExample2"
                              >
                                <div className="accordion-body">
                                  <p>{t("section2.answer_7")}</p>
                                </div>
                              </div>
                            </div>
                            <div className="space20" />
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                onClick={() => handleAccordion(8)}
                              >
                                <button
                                  className={
                                    isAccordion == 8
                                      ? "accordion-button"
                                      : "accordion-button collapsed"
                                  }
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseEight"
                                  aria-expanded="false"
                                  aria-controls="collapseEight"
                                >
                                  <p>{t("section2.question_8")}</p>
                                </button>
                              </h2>
                              <div
                                id="collapseEight"
                                className={
                                  isAccordion == 8
                                    ? "accordion-collapse collapse show"
                                    : "accordion-collapse collapse"
                                }
                                data-bs-parent="#accordionExample2"
                              >
                                <div className="accordion-body">
                                  <p>{t("section2.answer_8")}</p>
                                </div>
                              </div>
                            </div>
                            <div className="space20" />
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                onClick={() => handleAccordion(9)}
                              >
                                <button
                                  className={
                                    isAccordion == 9
                                      ? "accordion-button"
                                      : "accordion-button collapsed"
                                  }
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseNine"
                                  aria-expanded="false"
                                  aria-controls="collapseNine"
                                >
                                  <p>{t("section2.question_9")}</p>
                                </button>
                              </h2>
                              <div
                                id="collapseNine"
                                className={
                                  isAccordion == 9
                                    ? "accordion-collapse collapse show"
                                    : "accordion-collapse collapse"
                                }
                                data-bs-parent="#accordionExample2"
                              >
                                <div className="accordion-body">
                                  <p>{t("section2.answer_9")}</p>
                                </div>
                              </div>
                            </div>
                            <div className="space20" />
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                onClick={() => handleAccordion(10)}
                              >
                                <button
                                  className={
                                    isAccordion == 10
                                      ? "accordion-button"
                                      : "accordion-button collapsed"
                                  }
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTen"
                                  aria-expanded="false"
                                  aria-controls="collapseTen"
                                >
                                  <p>{t("section2.question_10")}</p>
                                </button>
                              </h2>
                              <div
                                id="collapseTen"
                                className={
                                  isAccordion == 10
                                    ? "accordion-collapse collapse show"
                                    : "accordion-collapse collapse"
                                }
                                data-bs-parent="#accordionExample2"
                              >
                                <div className="accordion-body">
                                  <p>{t("section2.answer_10")}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
