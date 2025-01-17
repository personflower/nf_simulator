function Nation_Autoip(){
    //국가변경시의 기본정보
    var Nation_Index = [
      ["국가","공홈국가번호", "EBB함포연사","FCS길이","트리갱신용트리거","함선여유율","엔진시간","엔진비율","어뢰연사속도"],
      ["미국", 1,             18.8,         1700,   "UN",               23,16,120,  35.8],
      ["영국", 2,             19.88,        1600,   "RN",               28,17,120,  40.2],
      ["일본", 3,             19.6,         1600,   "IN",               22,14,120,  41.2],
      ["독일", 4,             19.8,         1750,   "KM",               20,14,120,  37],
      ["프랑스", 5,           19.6,         1725,   "MN",               25,15,120,  48],
      ["소련", 6,             18.72,        1728,   "SN",               25,16,122,  51],
      ["이탈리아", 7,         19.6,         1699,   "RM",               28,14,120,  52],
      ];
  
    //국가판정>자동IP
    for(i=0; i<Nation_Index.length; i++){
      if($("#nation_sel").val() == Nation_Index[i][0]){
        $(".FCS_Official_Shipyard").attr("href", "https://www.navyfield.co.kr:444/guide/shipyard/fcs.asp?Code1="+Nation_Index[i][1]);
        $(".Engine_Official_Shipyard").attr("href", "https://www.navyfield.co.kr:444/guide/shipyard/engine.asp?Code1="+Nation_Index[i][1]);
        $(".Ship_Official_Shipyard").attr("href", "https://www.navyfield.co.kr:444/guide/shipyard/ship.asp?Code1="+Nation_Index[i][1]);
        $(".Gun_Official_Shipyard").attr("href", "https://www.navyfield.co.kr:444/guide/shipyard/gun.asp?Code1="+Nation_Index[i][1]);
        $(".Torpedo_Official_Shipyard").attr("href", "https://www.navyfield.co.kr:444/guide/shipyard/torpedo.asp?Code1="+Nation_Index[i][1]);

        $(".Gun_Reloadtime_Input").val(Nation_Index[i][2]);
        $(".FCS_Guideline_Input").val(Nation_Index[i][3]);
        $("."+Nation_Index[i][4]).show();
        $("#Ship_Calc_Ship_BasicOverheatRate_Input").val(Nation_Index[i][5]);
        $("#Ship_Calc_Engine_OverheatTime_Input").val(Nation_Index[i][6]);
        $("#Ship_Calc_Engine_OverheatRate_Input").val(Nation_Index[i][7]);
        $("#Torpedo_Reloadtime_Input").val(Nation_Index[i][8]);

      }
    }
  }
  
function RN_Abroad_Reset(){
  //영국유학IP체크리셋
  $("#RN_Abroad_Input").prop("checked", false);
  //영국유학함장IP/OP리셋
  if($("#nation_sel").val() == "영국"){
    $("#RN_Abroad_Input_Row").hide();
  }
  else{
    if($("#tree_sel").val() == "함장"){
      $("#RN_Abroad_Input_Row").show();
    }
  }
}

$(document).on("change","#nation_sel",function(){
    params["nationinput"] = $("#nation_sel").val();
  
    //수병트리의 리셋
    $(".TreeReset").hide();
    $(".SailorTreeReset").val("");
  
    Nation_Autoip();
    RN_Abroad_Reset();
    SS_Divetime_Autoip();
    
});

$(document).on("change","#tree_sel",function(){
    //
    params["treeinput"] = $("#tree_sel").val();
    //트리변경 -> 늦직IP리셋
    $(".SailorTreeReset").val("");
  
    //트리변경 -> OUTPUT리셋
    $(".Captin_Input_Row,.Captin_Output_Row,.Gunner_Input_Row,.Gunner_Output_Row,.Gunner_Output_Detail_Row,.Engine_Output_Row,.Sonar_Output_Row,.Submerge_Output_Row,.Torpedo_Input_Row,.Torpedo_Output_Row").hide();
  
    //영국유학IP리셋
    $("#RN_Abroad_Input").prop("checked", false);
  
    if($("#tree_sel").val() == "함장"){
      $(".Captin_Input_Row,.Captin_Output_Row").show();
      if($("#nation_sel").val() == "영국"){
        $("#RN_Abroad_Input_Row").hide();
      }
    }
    if($("#tree_sel").val().match("포병")){
      $(".Gunner_Input_Row,.Gunner_Output_Row").show();
      if($("#Gun_ActualReloadtime_Output").is(":checked") == true){
        $(".Gunner_Output_Detail_Row").show();
      }
    }
    if($("#tree_sel").val().match("기관")){
      $(".Engine_Output_Row").show();
    }
    if($("#tree_sel").val().match("음탐")){
      $(".Sonar_Output_Row").show();
    }
    if($("#tree_sel").val().match("잠항")){
      $(".Submerge_Input_Row").show();
      $(".Submerge_Output_Row").show();
    }
    if($("#tree_sel").val().match("어뢰")){
      $(".Torpedo_Input_Row").show();
      $(".Torpedo_Output_Row").show();
    }
});

$(document).on("change","#RN_Abroad_Input",function(){
    if($("#RN_Abroad_Input").is(":checked") == true){
      params["nationinput"] = "영국";
    }
    else{
      params["nationinput"] = $("#nation_sel").val();
    }
});

$(document).on("change","#Gun_ActualReloadtime_Output",function(){
    if($("#Gun_ActualReloadtime_Output").is(":checked") == true){
      $(".Gunner_Output_Detail_Row").show();
    }
    else{
      $(".Gunner_Output_Detail_Row").hide();
    }
});

$(document).on("change","#SS_Class_Input",function(){
    SS_Divetime_Autoip();
});

function SS_Divetime_Autoip(){
    var Nation_SS_Divetime = [
      ["국가","SS1","SS2","SS3","SS4","SS5","PSS","SS6"],
      ["미국",132,154,176,198.88,222.92,231,240],
      ["영국",129.8,151.8,173.8,196.4,221.52,230,240],
      ["일본",140.8,162.8,184.8,210.68,237.84,238,240],
      ["독일",127.6,151.8,176,200.64,224.88,232,240],
      ["프랑스",132.56,155.12,177.64,185.76,218,229,240],
      ["소련",128,152,176,208,220.48,230,240],
      ["이탈리아",124,145,166,200,224,232,240],
      ];
    for(i=0; i<Nation_SS_Divetime.length; i++){
      if($("#nation_sel").val() == Nation_SS_Divetime[i][0]){
        for(j=1; j<8; j++){
          if($("#SS_Class_Input").val() == Nation_SS_Divetime[0][j]){
            $("#SS_Divetime_Input").val(Nation_SS_Divetime[i][j]);
            $(".SS_Class_Output").text(Nation_SS_Divetime[0][j]+" "+Nation_SS_Divetime[i][j]+"s");
          }
        }
      }
    }
}

function autoabilip(e){
    input = e.value;
    //어빌입력 리셋
    document.getElementById("POTIP").value = 9;  
    document.getElementById("ACCIP").value = 9;
    document.getElementById("RLDIP").value = 9;
    document.getElementById("TORIP").value = 9;
    document.getElementById("AAWIP").value = 9;
    document.getElementById("REPIP").value = 9;
    document.getElementById("RESIP").value = 9;
    document.getElementById("ENGIP").value = 9;
    document.getElementById("AIRIP").value = 9;
    document.getElementById("FIGIP").value = 9;
    document.getElementById("BOMIP").value = 9;
  
    //이벤트수병 입력
    if(input == "개근"){
      document.getElementById("ACCIP").value = 14;
      document.getElementById("RLDIP").value = 14;
    }
    else if(input == "전설보조"){
      document.getElementById("REPIP").value = 14;
      document.getElementById("RESIP").value = 14;
      document.getElementById("ENGIP").value = 14;
    }
    else if(input == "전설특무"){
      document.getElementById("AIRIP").value = 14;
      document.getElementById("FIGIP").value = 14;
      document.getElementById("BOMIP").value = 14;
    }
    //플미수병 입력
    else if(input == "잠재플미"){
      document.getElementById("POTIP").value = 17;
    }
    else if(input == "명중플미"){
      document.getElementById("ACCIP").value = 14;
      document.getElementById("RLDIP").value = 11;
    }
    else if(input == "연사플미"){
      document.getElementById("ACCIP").value = 11;
      document.getElementById("RLDIP").value = 14;
    }
    else if(input == "어뢰플미"){
      document.getElementById("TORIP").value = 14;
    }
    else if(input == "수리플미"){
      document.getElementById("REPIP").value = 14;
    }
    else if(input == "보수플미"){
      document.getElementById("RESIP").value = 14;
    }
    else if(input == "기관플미"){
      document.getElementById("ENGIP").value = 14;
    }
    else if(input == "전투플미"){
      document.getElementById("FIGIP").value = 14;
    }
    else if(input == "폭격플미"){
      document.getElementById("BOMIP").value = 14;
    }
}

function Ship_Calc_GuidelineInput_Reset(){
    if(document.getElementById("Ship_Calc_Guideline_YN").checked == true){
      document.getElementById("Ship_Calc_FCSGuidelineInput_Row").style.display = "";
      document.getElementById("Ship_Calc_TargetGuidelineInput_Row").style.display = "";
    }
    else{
      document.getElementById("Ship_Calc_FCSGuidelineInput_Row").style.display = "none";
      document.getElementById("Ship_Calc_TargetGuidelineInput_Row").style.display = "none";
    }
}

function Realabil_Calc_AutoInput(index){
    document.getElementById("Realabil_Calc_POT_Input"+index).value = document.getElementById("POTTotal").innerHTML;
    document.getElementById("Realabil_Calc_ACC_Input"+index).value = document.getElementById("ACCTotal").innerHTML;
    document.getElementById("Realabil_Calc_RLD_Input"+index).value = document.getElementById("RLDTotal").innerHTML;
    document.getElementById("Realabil_Calc_TOR_Input"+index).value = document.getElementById("TORTotal").innerHTML;
    document.getElementById("Realabil_Calc_REP_Input"+index).value = document.getElementById("REPTotal").innerHTML;
    document.getElementById("Realabil_Calc_ENG_Input"+index).value = document.getElementById("ENGTotal").innerHTML;
    document.getElementById("Realabil_Calc_FIG_Input"+index).value = document.getElementById("FIGTotal").innerHTML;
    document.getElementById("Realabil_Calc_BOM_Input"+index).value = document.getElementById("BOMTotal").innerHTML;
    document.getElementById("Realabil_Calc_NUM_Input"+index).value = document.getElementById("NUMTotal").innerHTML;
    document.getElementById("Realabil_Calc_VET_Input"+index).value = document.getElementById("VET45").innerHTML;
    document.getElementById("Realabil_Calc_EXP_Input"+index).value = document.getElementById("NUMTotal").innerHTML - document.getElementById("VET45").innerHTML;
}

function Ship_Calc_AutoInput(index){
    document.getElementById("Ship_Calc_SailorType"+index).innerHTML = document.getElementById("tree_sel").value;
    if(document.getElementById("tree_sel").value == "함장"){
      if(index != 1){
        alert("함장은 함장석이외에 탑승할 수 없습니다")
      }
      document.getElementById("Ship_Calc_POTInput"+index).value = document.getElementById("POTTotal").innerHTML;
    }
    else{
      if(index == 1){
        if(document.getElementById("tree_sel").value != "함장"){
          alert("함장석에 함장이외의 수병은 횟수제프리미엄쉽에만 탑승할 수 있습니다")
        }
        document.getElementById("Ship_Calc_POTInput"+index).value = document.getElementById("POTTotal").innerHTML;
      }
    }
    if(document.getElementById("tree_sel").value == "갑판병"){
      if(index == 1){
        document.getElementById("Ship_Calc_POTInput"+index).value = document.getElementById("POTTotal").innerHTML;
      }
      else{
        document.getElementById("Ship_Calc_POTInput"+index).value = document.getElementById("POTSeamanTotal").innerHTML;
      }
      document.getElementById("Ship_Calc_ENGInput"+index).value = document.getElementById("ENGSeamanTotal").innerHTML;
    }
    if(document.getElementById("tree_sel").value == "기관병"){
      if(index > 5){
        document.getElementById("Ship_Calc_ENGInput"+index).value = document.getElementById("ENGTotal").innerHTML;
      }
    }
    document.getElementById("Ship_Calc_REPInput"+index).value = document.getElementById("REPTotal").innerHTML;
    document.getElementById("Ship_Calc_NUMInput"+index).value = document.getElementById("NUMTotal").innerHTML;
    document.getElementById("Ship_Calc_VETInput"+index).value = document.getElementById("VET45").innerHTML;
}

function Guideline_Calc_AutoInput(index){
    document.getElementById("Guideline_Calc_POTInput"+index).value = document.getElementById("POTTotal").innerHTML;
    document.getElementById("Guideline_Calc_REPInput"+index).value = document.getElementById("REPTotal").innerHTML;
    document.getElementById("Guideline_Calc_NUMInput"+index).value = document.getElementById("NUMTotal").innerHTML;
    document.getElementById("Guideline_Calc_VETInput"+index).value = document.getElementById("VET45").innerHTML;
    document.getElementById("Guideline_Calc_EXPInput"+index).value = document.getElementById("NUMTotal").innerHTML - document.getElementById("VET45").innerHTML;
    document.getElementById("Guideline_Calc_FCSInput"+index).value = document.getElementById("FCS_Guideline_Input").value;
    document.getElementById("Guideline_Calc_TargetInput"+index).value = 3000;
}

function Pompom_Reload_Calc_AutoInput(index){
    document.getElementById("Pompom_Reload_Calc_RLDInput"+index).value = document.getElementById("RLDTotal").innerHTML;
    document.getElementById("Pompom_Reload_Calc_REPInput"+index).value = document.getElementById("REPTotal").innerHTML;
    document.getElementById("Pompom_Reload_Calc_NUMInput"+index).value = document.getElementById("NUMTotal").innerHTML;
    document.getElementById("Pompom_Reload_Calc_VETInput"+index).value = document.getElementById("VET45").innerHTML;
    document.getElementById("Pompom_Reload_Calc_EXPInput"+index).value = document.getElementById("NUMTotal").innerHTML - document.getElementById("VET45").innerHTML;
}

function Reload_Calc_AutoInput(index){
    document.getElementById("Reload_Calc_RLDInput"+index).value = document.getElementById("RLDTotal").innerHTML;
    document.getElementById("Reload_Calc_REPInput"+index).value = document.getElementById("REPTotal").innerHTML;
    document.getElementById("Reload_Calc_NUMInput"+index).value = document.getElementById("NUMTotal").innerHTML;
    document.getElementById("Reload_Calc_VETInput"+index).value = document.getElementById("VET45").innerHTML;
    document.getElementById("Reload_Calc_EXPInput"+index).value = document.getElementById("NUMTotal").innerHTML - document.getElementById("VET45").innerHTML;
}

