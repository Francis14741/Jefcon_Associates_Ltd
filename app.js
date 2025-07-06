const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
const ejsMate = require("ejs-mate");
const debug = require("debug");
const debugapp = debug("app:app");

dotenv.config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const port = 3000;

// const Datastore = [{}];
// const database = new Datastore("database.db");
// database.loadDatabase();

app.get("/api", (req, res) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json({ data });
  });
});

app.post("/api", (req, res) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});

app.get("/Jefcon_Associates", (req, res) => {
  const { Jefcon_Associates } = req.params;
  res.render("Jefcon_Associates", { Jefcon_Associates });
});

app.post("/Jefcon_Associates", (req, res) => {
  const { Jefcon_Associates } = req.params;
  res.render("Jefcon_Associates", { Jefcon_Associates });
});

app.get("/Jefcon_more", (req, res) => {
  const { Jefcon_more } = req.params;
  res.render("Jefcon_more", { Jefcon_more });
});

app.post("/Jefcon_more", (req, res) => {
  const { Jefcon_more } = req.params;
  res.render("Jefcon_more", { Jefcon_more });
});

app.get("/search", (req, res) => {
  const { search } = req.params;
  res.render("search", { search });
});

app.post("/search", (req, res) => {
  const { search } = req.params;
  res.render("search", { search });
});

app.get("/contact", (req, res) => {
  const { contact } = req.params;
  res.render("contact", { contact });
});

app.post("/contact", (req, res) => {
  const { contact } = req.params;
  res.render("contact", { contact });
});

app.get("/contact_notfound", (req, res) => {
  const { contact_notfound } = req.params;
  res.render("contact_notfound", { contact_notfound });
});

app.get("/blogs", (req, res) => {
  const { blogs } = req.params;
  res.render("blogs", { blogs });
});

app.post("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.create(req.body);
    res.status(200).join(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).join({ message: error.message });
  }
});

app.get("/blogs_page2", (req, res) => {
  const { blogs_page2 } = req.params;
  res.render("blogs_page2", { blogs_page2 });
});

app.post("/blogs_page2", (req, res) => {
  const { blogs_page2 } = req.params;
  res.render("blogs_page2", { blogs_page2 });
});

app.get("/blogs_page3", (req, res) => {
  const { blogs_page3 } = req.params;
  res.render("blogs_page3", { blogs_page3 });
});

app.post("/blogs_page3", (req, res) => {
  const { blogs_page3 } = req.params;
  res.render("blogs_page3", { blogs_page3 });
});

app.get("/blogs_page4", (req, res) => {
  const { blogs_page4 } = req.params;
  res.render("blogs_page4", { blogs_page4 });
});

app.post("/blogs_page4", (req, res) => {
  const { blogs_page4 } = req.params;
  res.render("blogs_page4", { blogs_page4 });
});

app.get("/blogs_page5", (req, res) => {
  const { blogs_page5 } = req.params;
  res.render("blogs_page5", { blogs_page5 });
});

app.post("/blogs_page5", (req, res) => {
  const { blogs_page5 } = req.params;
  res.render("blogs_page5", { blogs_page5 });
});

app.get("/src_blogs", (req, res) => {
  const { src_blogs } = req.params;
  res.render("src_blogs", { src_blogs });
});

app.post("/src_blogs", (req, res) => {
  const { src_blogs } = req.params;
  res.render("src_blogs", { src_blogs });
});

app.get("/stormwater_blog", (req, res) => {
  const { stormwater_blog } = req.params;
  res.render("stormwater_blog", { stormwater_blog });
});

app.get("/deprof_archive", (req, res) => {
  const { deprof_archive } = req.params;
  res.render("deprof_archive", { deprof_archive });
});

app.post("/deprof_archive", (req, res) => {
  const { deprof_archive } = req.params;
  res.render("deprof_archive", { deprof_archive });
});

app.get("/deprof_archive2", (req, res) => {
  const { deprof_archive2 } = req.params;
  res.render("deprof_archive2", { deprof_archive2 });
});

app.get("/deprof_archive3", (req, res) => {
  const { deprof_archive3 } = req.params;
  res.render("deprof_archive3", { deprof_archive3 });
});

app.get("/deprof_archive4", (req, res) => {
  const { deprof_archive4 } = req.params;
  res.render("deprof_archive4", { deprof_archive4 });
});

app.get("/team", (req, res) => {
  const { team } = req.params;
  res.render("team", { team });
});

app.post("/team", (req, res) => {
  const { team } = req.params;
  res.render("team", { team });
});

app.get("/about", (req, res) => {
  const { about } = req.params;
  res.render("about", { about });
});

app.get("/services", (req, res) => {
  const { services } = req.params;
  res.render("services", { services });
});

app.get("/engineering_design", (req, res) => {
  const { engineering_design } = req.params;
  res.render("engineering_design", { engineering_design });
});

app.post("/engineering_design", (req, res) => {
  const { engineering_design } = req.params;
  res.render("engineering_design", { engineering_design });
});

app.get("/environmental_impact", (req, res) => {
  const { environmental_impact } = req.params;
  res.render("environmental_impact", { environmental_impact });
});

app.get("/advisory_services", (req, res) => {
  const { advisory_services } = req.params;
  res.render("advisory_services", { advisory_services });
});

app.get("/engineering_surveys", (req, res) => {
  const { engineering_surveys } = req.params;
  res.render("engineering_surveys", { engineering_surveys });
});

app.get("/feasibility_ecoStudies", (req, res) => {
  const { feasibility_ecoStudies } = req.params;
  res.render("feasibility_ecoStudies", { feasibility_ecoStudies });
});

app.get("/project_supervision", (req, res) => {
  const { project_supervision } = req.params;
  res.render("project_supervision", { project_supervision });
});

app.get("/project_costing", (req, res) => {
  const { project_costing } = req.params;
  res.render("project_costing", { project_costing });
});

app.get("/commitment", (req, res) => {
  const { commitment } = req.params;
  res.render("commitment", { commitment });
});

app.get("/projects", (req, res) => {
  const { projects } = req.params;
  res.render("projects", { projects });
});
app.get("/project_footer", (req, res) => {
  const { project_footer } = req.params;
  res.render("project_footer", { project_footer });
});

app.get("/recentProjects", (req, res) => {
  const { recentProjects } = req.params;
  res.render("recentProjects", { recentProjects });
});

app.get("/pastProjects", (req, res) => {
  const { pastProjects } = req.params;
  res.render("pastProjects", { pastProjects });
});

app.get("/stormwater_project", (req, res) => {
  const { stormwater_project } = req.params;
  res.render("stormwater_project", { stormwater_project });
});

app.get("/droneProject", (req, res) => {
  const { droneProject } = req.params;
  res.render("droneProject", { droneProject });
});

app.get("/gallery1_project", (req, res) => {
  const { gallery1_project } = req.params;
  res.render("gallery1_project", { gallery1_project });
});

app.get("/preventing_stormwater", (req, res) => {
  const { preventing_stormwater } = req.params;
  res.render("preventing_stormwater", { preventing_stormwater });
});

app.get("/understan_geotechnical", (req, res) => {
  const { understan_geotechnical } = req.params;
  res.render("understan_geotechnical", { understan_geotechnical });
});

app.get("/best_pract_stormwater", (req, res) => {
  const { best_pract_stormwater } = req.params;
  res.render("best_pract_stormwater", { best_pract_stormwater });
});

app.get("/rel_btw_landUseChange", (req, res) => {
  const { rel_btw_landUseChange } = req.params;
  res.render("rel_btw_landUseChange", { rel_btw_landUseChange });
});

app.get("/impact_land_use", (req, res) => {
  const { impact_land_use } = req.params;
  res.render("impact_land_use", { impact_land_use });
});

app.get("/navigat_risk_flooding", (req, res) => {
  const { navigat_risk_flooding } = req.params;
  res.render("navigat_risk_flooding", { navigat_risk_flooding });
});

app.get("/imp_commu_engagement", (req, res) => {
  const { imp_commu_engagement } = req.params;
  res.render("imp_commu_engagement", { imp_commu_engagement });
});

app.get("/eightfacts_about_storm", (req, res) => {
  const { eightfacts_about_storm } = req.params;
  res.render("eightfacts_about_storm", { eightfacts_about_storm });
});

app.get("/seven_ways_handle_flood", (req, res) => {
  const { seven_ways_handle_flood } = req.params;
  res.render("seven_ways_handle_flood", { seven_ways_handle_flood });
});

app.get("/seven_things_toKnow", (req, res) => {
  const { seven_things_toKnow } = req.params;
  res.render("seven_things_toKnow", { seven_things_toKnow });
});

app.get("/merits_recomend_options", (req, res) => {
  const { merits_recomend_options } = req.params;
  res.render("merits_recomend_options", { merits_recomend_options });
});

app.get("/channel_select_stormwater", (req, res) => {
  const { channel_select_stormwater } = req.params;
  res.render("channel_select_stormwater", { channel_select_stormwater });
});

app.get("/consideratns_stormwater", (req, res) => {
  const { consideratns_stormwater } = req.params;
  res.render("consideratns_stormwater", { consideratns_stormwater });
});

app.get("/engSurvey_forEffectEfficient", (req, res) => {
  const { engSurvey_forEffectEfficient } = req.params;
  res.render("engSurvey_forEffectEfficient", { engSurvey_forEffectEfficient });
});

app.get("/desc_coreHydrolog_Term", (req, res) => {
  const { desc_coreHydrolog_Term } = req.params;
  res.render("desc_coreHydrolog_Term", { desc_coreHydrolog_Term });
});

app.get("/hydrological_basins", (req, res) => {
  const { hydrological_basins } = req.params;
  res.render("hydrological_basins", { hydrological_basins });
});

app.get("/global_warming", (req, res) => {
  const { global_warming } = req.params;
  res.render("global_warming", { global_warming });
});

app.get("/rec_actions_youngEngr1", (req, res) => {
  const { rec_actions_youngEngr1 } = req.params;
  res.render("rec_actions_youngEngr1", { rec_actions_youngEngr1 });
});

app.get("/rec_actions_youngEng2", (req, res) => {
  const { rec_actions_youngEng2 } = req.params;
  res.render("rec_actions_youngEng2", { rec_actions_youngEng2 });
});

app.get("/oilHubs_delta", (req, res) => {
  const { oilHubs_delta } = req.params;
  res.render("oilHubs_delta", { oilHubs_delta });
});

app.get("/improvProf_efficiency", (req, res) => {
  const { improvProf_efficiency } = req.params;
  res.render("improvProf_efficiency", { improvProf_efficiency });
});

app.get("/youngEgineer_importance", (req, res) => {
  const { youngEgineer_importance } = req.params;
  res.render("youngEgineer_importance", { youngEgineer_importance });
});

app.get("/challenges_youngEngr", (req, res) => {
  const { challenges_youngEngr } = req.params;
  res.render("challenges_youngEngr", { challenges_youngEngr });
});

app.get("/workin_withStan_engCode", (req, res) => {
  const { workin_withStan_engCode } = req.params;
  res.render("workin_withStan_engCode", { workin_withStan_engCode });
});

app.get("/tributaries_RivrNiger", (req, res) => {
  const { tributaries_RivrNiger } = req.params;
  res.render("tributaries_RivrNiger", { tributaries_RivrNiger });
});

app.get("/studyDesign_Stormwater", (req, res) => {
  const { studyDesign_Stormwater } = req.params;
  res.render("studyDesign_Stormwater", { studyDesign_Stormwater });
});

app.get("/findings_observation1", (req, res) => {
  const { findings_observation1 } = req.params;
  res.render("findings_observation1", { findings_observation1 });
});

app.get("/findings_and_observation2", (req, res) => {
  const { findings_and_observation2 } = req.params;
  res.render("findings_and_observation2", { findings_and_observation2 });
});

app.get("/engDesign_hydrolog_Analysis", (req, res) => {
  const { engDesign_hydrolog_Analysis } = req.params;
  res.render("engDesign_hydrolog_Analysis", { engDesign_hydrolog_Analysis });
});

app.get("/hydraulic_design", (req, res) => {
  const { hydraulic_design } = req.params;
  res.render("hydraulic_design", { hydraulic_design });
});

app.get("/recommend_stormWater", (req, res) => {
  const { recommend_stormWater } = req.params;
  res.render("recommend_stormWater", { recommend_stormWater });
});

app.get("/accessin_qual_engPract", (req, res) => {
  const { accessin_qual_engPract } = req.params;
  res.render("accessin_qual_engPract", { accessin_qual_engPract });
});

app.get("/risingTides_sinkinCities", (req, res) => {
  const { risingTides_sinkinCities } = req.params;
  res.render("risingTides_sinkinCities", { risingTides_sinkinCities });
});

app.get("/chal_posed_by_trad_storm", (req, res) => {
  const { chal_posed_by_trad_storm } = req.params;
  res.render("chal_posed_by_trad_storm", { chal_posed_by_trad_storm });
});

app.get("/urgent_need_4_sustainable", (req, res) => {
  const { urgent_need_4_sustainable } = req.params;
  res.render("urgent_need_4_sustainable", { urgent_need_4_sustainable });
});

app.get("/ensuringStormwater", (req, res) => {
  const { ensuringStormwater } = req.params;
  res.render("ensuringStormwater", { ensuringStormwater });
});

app.get("/exampl_Sustainable", (req, res) => {
  const { exampl_Sustainable } = req.params;
  res.render("exampl_Sustainable", { exampl_Sustainable });
});

app.get("/address_nig_wat_Pollution", (req, res) => {
  const { address_nig_wat_Pollution } = req.params;
  res.render("address_nig_wat_Pollution", { address_nig_wat_Pollution });
});

app.get("/eval_succ_effec_exisDrain", (req, res) => {
  const { eval_succ_effec_exisDrain } = req.params;
  res.render("eval_succ_effec_exisDrain", { eval_succ_effec_exisDrain });
});

app.get("/chal_stormwat_criticalAnal", (req, res) => {
  const { chal_stormwat_criticalAnal } = req.params;
  res.render("chal_stormwat_criticalAnal", { chal_stormwat_criticalAnal });
});

app.get("/sample_post", (req, res) => {
  const { sample_post } = req.params;
  res.render("sample_post", { sample_post });
});

app.get("/abdul_yahaya_Archive", (req, res) => {
  const { abdul_yahaya_Archive } = req.params;
  res.render("abdul_yahaya_Archive", { abdul_yahaya_Archive });
});

app.get("/website", (req, res) => {
  const { website } = req.params;
  res.render("website", { website });
});

app.get("/website2", (req, res) => {
  const { website2 } = req.params;
  res.render("website2", { website2 });
});

app.get("/website3", (req, res) => {
  const { website3 } = req.params;
  res.render("website3", { website3 });
});

app.get("/website4", (req, res) => {
  const { website4 } = req.params;
  res.render("website4", { website4 });
});

app.get("/website5", (req, res) => {
  const { website5 } = req.params;
  res.render("website5", { website5 });
});

app.get("/business_concept", (req, res) => {
  const { business_concept } = req.params;
  res.render("business_concept", { business_concept });
});

app.get("/business_strategy", (req, res) => {
  const { business_strategy } = req.params;
  res.render("business_strategy", { business_strategy });
});

app.get("/mission_statement", (req, res) => {
  const { mission_statement } = req.params;
  res.render("mission_statement", { mission_statement });
});

app.get("/capacity_building", (req, res) => {
  const { capacity_building } = req.params;
  res.render("capacity_building", { capacity_building });
});

app.get("/our_values", (req, res) => {
  const { our_values } = req.params;
  res.render("our_values", { our_values });
});

app.get("/vision_statement", (req, res) => {
  const { vision_statement } = req.params;
  res.render("vision_statement", { vision_statement });
});

app.get("/privacyPolicy", (req, res) => {
  const { privacyPolicy } = req.params;
  res.render("privacyPolicy", { privacyPolicy });
});

app.get("/faq_construction", (req, res) => {
  const { faq_construction } = req.params;
  res.render("faq_construction", { faq_construction });
});

app.get("/faq_stormwater", (req, res) => {
  const { faq_stormwater } = req.params;
  res.render("faq_stormwater", { faq_stormwater });
});

app.get("/faq_consultancy", (req, res) => {
  const { faq_consultancy } = req.params;
  res.render("faq_consultancy", { faq_consultancy });
});

app.get("/faq_participation", (req, res) => {
  const { faq_participation } = req.params;
  res.render("faq_participation", { faq_participation });
});

app.get("/faq_footer", (req, res) => {
  const { faq_footer } = req.params;
  res.render("faq_footer", { faq_footer });
});

app.get("/services_footer", (req, res) => {
  const { services_footer } = req.params;
  res.render("services_footer", { services_footer });
});

app.get("/blogs_footer", (req, res) => {
  const { blogs_footer } = req.params;
  res.render("blogs_footer", { blogs_footer });
});

app.get("/case_studies", (req, res) => {
  const { case_studies } = req.params;
  res.render("case_studies", { case_studies });
});

app.get("/construction_law", (req, res) => {
  const { construction_law } = req.params;
  res.render("construction_law", { construction_law });
});

app.get("/construction_technology", (req, res) => {
  const { construction_technology } = req.params;
  res.render("construction_technology", { construction_technology });
});

app.get("/consultancy_advisory", (req, res) => {
  const { consultancy_advisory } = req.params;
  res.render("consultancy_advisory", { consultancy_advisory });
});

app.get("/engDesign_simulation", (req, res) => {
  const { engDesign_simulation } = req.params;
  res.render("engDesign_simulation", { engDesign_simulation });
});

app.get("/category_eng_surveys", (req, res) => {
  const { category_eng_surveys } = req.params;
  res.render("category_eng_surveys", { category_eng_surveys });
});

app.get("/cat_environmental", (req, res) => {
  const { cat_environmental } = req.params;
  res.render("cat_environmental", { cat_environmental });
});

app.get("/cat_feasibility_Eco", (req, res) => {
  const { cat_feasibility_Eco } = req.params;
  res.render("cat_feasibility_Eco", { cat_feasibility_Eco });
});

app.get("/industryNews_trend", (req, res) => {
  const { industryNews_trend } = req.params;
  res.render("industryNews_trend", { industryNews_trend });
});

app.get("/innovation_research", (req, res) => {
  const { innovation_research } = req.params;
  res.render("innovation_research", { innovation_research });
});

app.get("/mech_elec_Plumbing", (req, res) => {
  const { mech_elec_Plumbing } = req.params;
  res.render("mech_elec_Plumbing", { mech_elec_Plumbing });
});

app.get("/pro_superv_cat", (req, res) => {
  const { pro_superv_cat } = req.params;
  res.render("pro_superv_cat", { pro_superv_cat });
});

app.get("/proj_valuation_cost", (req, res) => {
  const { proj_valuation_cost } = req.params;
  res.render("proj_valuation_cost", { proj_valuation_cost });
});

app.get("/safety_regulations", (req, res) => {
  const { safety_regulations } = req.params;
  res.render("safety_regulations", { safety_regulations });
});

app.get("/training_education", (req, res) => {
  const { training_education } = req.params;
  res.render("training_education", { training_education });
});

app.get("/uncategorized", (req, res) => {
  const { uncategorized } = req.params;
  res.render("uncategorized", { uncategorized });
});

app.get("/uncategorized_2", (req, res) => {
  const { uncategorized_2 } = req.params;
  res.render("uncategorized_2", { uncategorized_2 });
});

app.get("/uncategorized_3", (req, res) => {
  const { uncategorized_3 } = req.params;
  res.render("uncategorized_3", { uncategorized_3 });
});

app.get("/uncategorized_4", (req, res) => {
  const { uncategorized_4 } = req.params;
  res.render("uncategorized_4", { uncategorized_4 });
});

app.get("/archives_2025_june", (req, res) => {
  const { archives_2025_june } = req.params;
  res.render("archives_2025_june", { archives_2025_june });
});

app.get("/archives_2025_april", (req, res) => {
  const { archives_2025_april } = req.params;
  res.render("archives_2025_april", { archives_2025_april });
});

app.get("/archives_2024_july", (req, res) => {
  const { archives_2024_july } = req.params;
  res.render("archives_2024_july", { archives_2024_july });
});

app.get("/archives_2024_june", (req, res) => {
  const { archives_2024_june } = req.params;
  res.render("archives_2024_june", { archives_2024_june });
});

app.get("/archives_2024_may", (req, res) => {
  const { archives_2024_may } = req.params;
  res.render("archives_2024_may", { archives_2024_may });
});

app.get("/archives_2024_april", (req, res) => {
  const { archives_2024_april } = req.params;
  res.render("archives_2024_april", { archives_2024_april });
});

app.get("/archives_2024_march", (req, res) => {
  const { archives_2024_march } = req.params;
  res.render("archives_2024_march", { archives_2024_march });
});

app.get("/archives_2024_feb", (req, res) => {
  const { archives_2024_feb } = req.params;
  res.render("archives_2024_feb", { archives_2024_feb });
});

app.get("/archives_2024_jan", (req, res) => {
  const { archives_2024_jan } = req.params;
  res.render("archives_2024_jan", { archives_2024_jan });
});

app.get("/archives_2023_dec", (req, res) => {
  const { archives_2023_dec } = req.params;
  res.render("archives_2023_dec", { archives_2023_dec });
});

app.get("/archives_2023_nov", (req, res) => {
  const { archives_2023_nov } = req.params;
  res.render("archives_2023_nov", { archives_2023_nov });
});

app.get("/archives_2023_oct", (req, res) => {
  const { archives_2023_oct } = req.params;
  res.render("archives_2023_oct", { archives_2023_oct });
});

app.get("/archives_2023_march", (req, res) => {
  const { archives_2023_march } = req.params;
  res.render("archives_2023_march", { archives_2023_march });
});

app.get("/archives_2023_feb", (req, res) => {
  const { archives_2023_feb } = req.params;
  res.render("archives_2023_feb", { archives_2023_feb });
});

app.get("/archives_2023_jan", (req, res) => {
  const { archives_2023_jan } = req.params;
  res.render("archives_2023_jan", { archives_2023_jan });
});

app.get("/archives_2022_dec", (req, res) => {
  const { archives_2022_dec } = req.params;
  res.render("archives_2022_dec", { archives_2022_dec });
});

app.get("/archives_2022_nov", (req, res) => {
  const { archives_2022_nov } = req.params;
  res.render("archives_2022_nov", { archives_2022_nov });
});

app.get("/archives_2022_oct", (req, res) => {
  const { archives_2022_oct } = req.params;
  res.render("archives_2022_oct", { archives_2022_oct });
});

app.get("/archives_2022_sept", (req, res) => {
  const { archives_2022_sept } = req.params;
  res.render("archives_2022_sept", { archives_2022_sept });
});

app.get("/archives_2022_august", (req, res) => {
  const { archives_2022_august } = req.params;
  res.render("archives_2022_august", { archives_2022_august });
});

app.get("/archives_2022_july", (req, res) => {
  const { archives_2022_july } = req.params;
  res.render("archives_2022_july", { archives_2022_july });
});

app.get("/archives_2022_may", (req, res) => {
  const { archives_2022_may } = req.params;
  res.render("archives_2022_may", { archives_2022_may });
});

app.get("/archives_2022_april", (req, res) => {
  const { archives_2022_april } = req.params;
  res.render("archives_2022_april", { archives_2022_april });
});

app.get("/archives_2022_march", (req, res) => {
  const { archives_2022_march } = req.params;
  res.render("archives_2022_march", { archives_2022_march });
});

app.get("/archives_2022_feb", (req, res) => {
  const { archives_2022_feb } = req.params;
  res.render("archives_2022_feb", { archives_2022_feb });
});

app.get("/archives_2022_jan", (req, res) => {
  const { archives_2022_jan } = req.params;
  res.render("archives_2022_jan", { archives_2022_jan });
});

app.get("/archives_2021_dec", (req, res) => {
  const { archives_2021_dec } = req.params;
  res.render("archives_2021_dec", { archives_2021_dec });
});

app.get("/archives_2021_nov", (req, res) => {
  const { archives_2021_nov } = req.params;
  res.render("archives_2021_nov", { archives_2021_nov });
});

app.get("/archives_2021_august", (req, res) => {
  const { archives_2021_august } = req.params;
  res.render("archives_2021_august", { archives_2021_august });
});

app.get("/archives_2021_june", (req, res) => {
  const { archives_2021_june } = req.params;
  res.render("archives_2021_june", { archives_2021_june });
});

app.get("/archives_2021_may", (req, res) => {
  const { archives_2021_may } = req.params;
  res.render("archives_2021_may", { archives_2021_may });
});

app.get("/archives_2021_april", (req, res) => {
  const { archives_2021_april } = req.params;
  res.render("archives_2021_april", { archives_2021_april });
});

app.get("/archives_2021_jan", (req, res) => {
  const { archives_2021_jan } = req.params;
  res.render("archives_2021_jan", { archives_2021_jan });
});

app.get("/archives_2020_nov", (req, res) => {
  const { archives_2020_nov } = req.params;
  res.render("archives_2020_nov", { archives_2020_nov });
});

app.get("/archives_2020_oct", (req, res) => {
  const { archives_2020_oct } = req.params;
  res.render("archives_2020_oct", { archives_2020_oct });
});

app.get("/archives_2020_sept", (req, res) => {
  const { archives_2020_sept } = req.params;
  res.render("archives_2020_sept", { archives_2020_sept });
});

app.get("/archives_2020_august", (req, res) => {
  const { archives_2020_august } = req.params;
  res.render("archives_2020_august", { archives_2020_august });
});

app.get("/archives_2020_july", (req, res) => {
  const { archives_2020_july } = req.params;
  res.render("archives_2020_july", { archives_2020_july });
});

app.get("/archives_2020_may", (req, res) => {
  const { archives_2020_may } = req.params;
  res.render("archives_2020_may", { archives_2020_may });
});

app.get("/tag_drainageChannels", (req, res) => {
  const { tag_drainageChannels } = req.params;
  res.render("tag_drainageChannels", { tag_drainageChannels });
});

app.get("/tag_floodwatercontrol", (req, res) => {
  const { tag_floodwatercontrol } = req.params;
  res.render("tag_floodwatercontrol", { tag_floodwatercontrol });
});

app.get("/tag_stormwater", (req, res) => {
  const { tag_stormwater } = req.params;
  res.render("tag_stormwater", { tag_stormwater });
});

app.get("/tag_stormwatermanagement", (req, res) => {
  const { tag_stormwatermanagement } = req.params;
  res.render("tag_stormwatermanagement", { tag_stormwatermanagement });
});

app.get("/tag_civilengineering", (req, res) => {
  const { tag_civilengineering } = req.params;
  res.render("tag_civilengineering", { tag_civilengineering });
});

app.get("/tag_complexengineerprob", (req, res) => {
  const { tag_complexengineerprob } = req.params;
  res.render("tag_complexengineerprob", { tag_complexengineerprob });
});

app.get("/tag_construction", (req, res) => {
  const { tag_construction } = req.params;
  res.render("tag_construction", { tag_construction });
});

app.get("/tag_drainage", (req, res) => {
  const { tag_drainage } = req.params;
  res.render("tag_drainage", { tag_drainage });
});

app.get("/tag_drainagebasin", (req, res) => {
  const { tag_drainagebasin } = req.params;
  res.render("tag_drainagebasin", { tag_drainagebasin });
});

app.get("/tag_drainagebresilien", (req, res) => {
  const { tag_drainagebresilien } = req.params;
  res.render("tag_drainagebresilien", { tag_drainagebresilien });
});

app.get("/tag_drainagecell", (req, res) => {
  const { tag_drainagecell } = req.params;
  res.render("tag_drainagecell", { tag_drainagecell });
});

app.get("/tag_drainagechannel", (req, res) => {
  const { tag_drainagechannel } = req.params;
  res.render("tag_drainagechannel", { tag_drainagechannel });
});

app.get("/tag_drainagecontractor", (req, res) => {
  const { tag_drainagecontractor } = req.params;
  res.render("tag_drainagecontractor", { tag_drainagecontractor });
});

app.get("/tag_drainagecover", (req, res) => {
  const { tag_drainagecover } = req.params;
  res.render("tag_drainagecover", { tag_drainagecover });
});

app.get("/tag_drainagedesign", (req, res) => {
  const { tag_drainagedesign } = req.params;
  res.render("tag_drainagedesign", { tag_drainagedesign });
});

app.get("/tag_drainageditch", (req, res) => {
  const { tag_drainageditch } = req.params;
  res.render("tag_drainageditch", { tag_drainageditch });
});

app.get("/tag_drainageengineer", (req, res) => {
  const { tag_drainageengineer } = req.params;
  res.render("tag_drainageengineer", { tag_drainageengineer });
});

app.get("/tag_drainagehole", (req, res) => {
  const { tag_drainagehole } = req.params;
  res.render("tag_drainagehole", { tag_drainagehole });
});

app.get("/tag_drainageissues", (req, res) => {
  const { tag_drainageissues } = req.params;
  res.render("tag_drainageissues", { tag_drainageissues });
});

app.get("/tag_drainagelife", (req, res) => {
  const { tag_drainagelife } = req.params;
  res.render("tag_drainagelife", { tag_drainagelife });
});

app.get("/tag_drainageline", (req, res) => {
  const { tag_drainageline } = req.params;
  res.render("tag_drainageline", { tag_drainageline });
});

app.get("/tag_drainagepathway", (req, res) => {
  const { tag_drainagepathway } = req.params;
  res.render("tag_drainagepathway", { tag_drainagepathway });
});

app.get("/tag_drainagepipe", (req, res) => {
  const { tag_drainagepipe } = req.params;
  res.render("tag_drainagepipe", { tag_drainagepipe });
});

app.get("/tag_drainagepipes", (req, res) => {
  const { tag_drainagepipes } = req.params;
  res.render("tag_drainagepipes", { tag_drainagepipes });
});

app.get("/tag_drainageproblems", (req, res) => {
  const { tag_drainageproblems } = req.params;
  res.render("tag_drainageproblems", { tag_drainageproblems });
});

app.get("/tag_drainageproducts", (req, res) => {
  const { tag_drainageproducts } = req.params;
  res.render("tag_drainageproducts", { tag_drainageproducts });
});

app.get("/tag_drainageproject", (req, res) => {
  const { tag_drainageproject } = req.params;
  res.render("tag_drainageproject", { tag_drainageproject });
});

app.get("/tag_drainagesolution", (req, res) => {
  const { tag_drainagesolution } = req.params;
  res.render("tag_drainagesolution", { tag_drainagesolution });
});

app.get("/tag_drainagesolutions", (req, res) => {
  const { tag_drainagesolutions } = req.params;
  res.render("tag_drainagesolutions", { tag_drainagesolutions });
});

app.get("/tag_drainagespecialists", (req, res) => {
  const { tag_drainagespecialists } = req.params;
  res.render("tag_drainagespecialists", { tag_drainagespecialists });
});

app.get("/tag_drainagesystem", (req, res) => {
  const { tag_drainagesystem } = req.params;
  res.render("tag_drainagesystem", { tag_drainagesystem });
});

app.get("/tag_drainagesystems", (req, res) => {
  const { tag_drainagesystems } = req.params;
  res.render("tag_drainagesystems", { tag_drainagesystems });
});

app.get("/tag_drainagetile", (req, res) => {
  const { tag_drainagetile } = req.params;
  res.render("tag_drainagetile", { tag_drainagetile });
});

app.get("/tag_drainagevisage", (req, res) => {
  const { tag_drainagevisage } = req.params;
  res.render("tag_drainagevisage", { tag_drainagevisage });
});

app.get("/tag_drainagework", (req, res) => {
  const { tag_drainagework } = req.params;
  res.render("tag_drainagework", { tag_drainagework });
});

app.get("/tag_drainageworks", (req, res) => {
  const { tag_drainageworks } = req.params;
  res.render("tag_drainageworks", { tag_drainageworks });
});

app.get("/tag_engineeringfundamentals", (req, res) => {
  const { tag_engineeringfundamentals } = req.params;
  res.render("tag_engineeringfundamentals", { tag_engineeringfundamentals });
});

app.get("/tag_engineeringpractices", (req, res) => {
  const { tag_engineeringpractices } = req.params;
  res.render("tag_engineeringpractices", { tag_engineeringpractices });
});

app.get("/tag_Nigeria", (req, res) => {
  const { tag_Nigeria } = req.params;
  res.render("tag_Nigeria", { tag_Nigeria });
});

app.get("/tag_qualityEngProducts", (req, res) => {
  const { tag_qualityEngProducts } = req.params;
  res.render("tag_qualityEngProducts", { tag_qualityEngProducts });
});

app.get("/tag_stormwaterdrainage", (req, res) => {
  const { tag_stormwaterdrainage } = req.params;
  res.render("tag_stormwaterdrainage", { tag_stormwaterdrainage });
});

app.get("/tag_storm_water_managemt", (req, res) => {
  const { tag_storm_water_managemt } = req.params;
  res.render("tag_storm_water_managemt", { tag_storm_water_managemt });
});

app.get("/tag_sustainStormwatmanage", (req, res) => {
  const { tag_sustainStormwatmanage } = req.params;
  res.render("tag_sustainStormwatmanage", { tag_sustainStormwatmanage });
});

app.get("/tag_youngengineer", (req, res) => {
  const { tag_youngengineer } = req.params;
  res.render("tag_youngengineer", { tag_youngengineer });
});

app.get("/tag_drainageinspectionmethod", (req, res) => {
  const { tag_drainageinspectionmethod } = req.params;
  res.render("tag_drainageinspectionmethod", { tag_drainageinspectionmethod });
});

app.listen(port, () => {
  debugapp(`App Is Listening On Port http://localhost: ${port}`);
});
