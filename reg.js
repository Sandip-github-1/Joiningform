let formData = {
    "personalInformation" : {},
    "emergencyContactInformation" : {},
    "educationInformation" : {},
    "previousEmploymentInformation" : {},
    "bankingInformation" : {},
    "References" : {}    
};
/**
 * Function to add Education Data in Form Data
 * @param edu_selectedtxt 
 * @param edu_selectedvalue 
 * @param eduniversity 
 * @param edyoc 
 * @param edschclg 
 * @param percgp 
 */
function insertEduData(edu_selectedtxt,edu_selectedvalue,eduniversity,edyoc,edschclg,percgp){
    let educationData = {
        'education':edu_selectedtxt,
        'university':eduniversity,
        'yop':edyoc,
        'schoolname': edschclg,
        'percentage': percgp
     };
     //formData[edu_selectedvalue]=educationData;
     formData.educationInformation[edu_selectedvalue]=educationData;    
    //console.log(formData);
}
/**
 * Function to add Education Data in Table
 */
function addEducation(){
    // Getting education form data using document.getElement
    let edudetailtable = document.getElementById('edudetailtable');
    let education = document.getElementById("ed_dropdown");
    let eduniversity = document.getElementById('ed_university').value;
    let edyoc = document.getElementById('ed_yoc').value;
    let edschclg = document.getElementById('ed_schclg').value;
    let percgp = document.getElementById('ed_percgp').value;
    
    //Getting education dd text and data
    let edu_selectedtxt = education.options[education.selectedIndex].text;
    let edu_selectedvalue = education.options[education.selectedIndex].value;
    
    //if to check education dd selected value.
    if (education.selectedIndex != 0) {        
        
        //Getting table row HTML
        let tableRowBody = getTableRowHtml(eduniversity,edyoc,edschclg,percgp,edu_selectedtxt);
        
        //Getting table and table row with dd selected value as id
        let edutable = document.getElementById('edu_table');
        let tablerow = edutable.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[edu_selectedvalue];
    
        //If to check table row  and add data to education table 
        if (tablerow === undefined){ 
            let edutblebody = edutable.getElementsByTagName('tbody')[0];
            let newrow = edutblebody.insertRow();
            newrow.setAttribute("id", edu_selectedvalue);
            newrow.innerHTML = tableRowBody;
        }
        else{
            tablerow.innerHTML = tableRowBody;
        }
        edudetailtable.classList.remove('d-none');
        insertEduData(edu_selectedtxt,edu_selectedvalue,eduniversity,edyoc,edschclg,percgp);

        education.selectedIndex= 0;
        document.getElementById('ed_university').value = '';
        document.getElementById('ed_yoc').value = '';
        document.getElementById('ed_schclg').value = '';
        document.getElementById('ed_percgp').value = '';

    }
    else
    {
        alert('Please Select Education');
    }
 }

 //
 function getTableRowHtml(edunversty,eduyoc,eduschclg,perccgp,eduselected) {

    let tableBody = `                       
    <td>${eduselected}</td>
    <td>${edunversty}</td>
    <td>${eduyoc}</td>
    <td>${eduschclg}</td>
    <td>${perccgp}</td>`;
    return tableBody;
 }
 //let prevEmpInfoHtml = ''; 
 function addPreviousEmp(){
    //document.getElementById('prevEmpInfo_21').classList.remove('d-none');
    // document.getElementById('prevEmpInfo_22').classList.remove('d-none');
    let a = document.getElementById('prevEmpInfo');
    let prevEmpInfoHtml = a.innerHTML;
    
    let prevEmpInfoHtml1 = ' <div class="row mb-3"> <div class="col-3"> <label for="inputnationality" class="col-form-label-sm">Company</label> <input type="text" class="form-control form-control-sm" id="pe_company"> </div> <div class="col-3"> <label for="inputnationality" class="col-form-label-sm">Position Held</label> <input type="text" class="form-control form-control-sm" id="pe_position"> </div> <div class="col-lg-6"> <label for="inputnationality" class="col-form-label-sm">Period of Employment</label> <div class="row"> <div class="col-2"> <label for="inputnationality" class="col-form-label-sm">From</label> </div> <div class="col-4"> <input class="form-control form-control-sm text-start" type="date" id="pe_fromdate" name="fromdate"> </div> <div class="col-2 text-center"> <label class="col-form-label-sm">To</label> </div> <div class="col-4"> <input class="form-control form-control-sm" type="date" id="pe_todate" name="todate"> </div> </div> </div> </div> <div class="row mb-3"> <div class="col"> <label for="inputnationality" class="col-form-label-sm">Reason for Leaving</label> <input type="text" class="form-control form-control-sm" id="pe_reson"> </div> </div>';
    a.innerHTML = prevEmpInfoHtml +  prevEmpInfoHtml1;


    //console.log(prevEmpInfoHtml +  prevEmpInfoHtml1);
 }

function clearform(){
    let edudetailtable = document.getElementById('edu_table');
    while (edudetailtable.rows.length > 1) {
        edudetailtable.deleteRow(1);
      }
      edudetailtable.classList.add('d-none');
    document.getElementById("joiningForm").reset();
    //Object clear and fields need to clear
    //table id all rows delete
    // insert row in obje and then shows if delete
    console.log(edudetailtable);
}

function submitformdata(){
    let pi_fname = document.getElementById("pi_fname");
    let pi_mname = document.getElementById("pi_mname");
    let pi_lname = document.getElementById("pi_lname");
    let pi_gender = document.getElementById("pi_gender");
    let pi_birthdate = document.getElementById("pi_birthdate");
    let pi_contactno = document.getElementById("pi_contactno");
    let pi_nationality = document.getElementById("pi_nationality");
    let pi_mstatus = document.getElementById("pi_mstatus");
    let pi_email = document.getElementById("pi_email");
    let pi_paddress = document.getElementById("pi_paddress");
    let pi_caddress = document.getElementById("pi_caddress");

    let ec_fullname = document.getElementById("ec_fullname");
    let ec_contactno = document.getElementById("ec_contactno");
    let ec_email = document.getElementById("ec_email");
    let ec_relationship = document.getElementById("ec_relationship");
    let ec_address = document.getElementById("ec_address");

    let ed_dropdown = document.getElementById("ed_dropdown");
    let ed_university = document.getElementById("ed_university");
    let ed_yoc = document.getElementById("ed_yoc");
    let ed_schclg = document.getElementById("ed_schclg");
    let ed_percgp = document.getElementById("ed_percgp");
    let edu_table = document.getElementById("edu_table");

    let pe_company = document.getElementById("pe_company");
    let pe_position = document.getElementById("pe_position");
    let pe_fromdate = document.getElementById("pe_fromdate");
    let pe_todate = document.getElementById("pe_todate");
    let pe_reson = document.getElementById("pe_reson");

    let b_acnthlderdnm = document.getElementById("b_acnthlderdnm");
    let b_banknm = document.getElementById("b_banknm");
    let b_accountno = document.getElementById("b_accountno");
    let b_branch = document.getElementById("b_branch");
    let b_ifsc = document.getElementById("b_ifsc");

    let ref_name = document.getElementById("ref_name");
    let ref_rel = document.getElementById("ref_rel");
    let ref_contactno = document.getElementById("ref_contactno");
    let ref_email = document.getElementById("ref_email");

    // let edu_selectedtxt = education.options[education.selectedIndex].text;
    // let edu_selectedvalue = education.options[education.selectedIndex].value;

    pi_fnamevalue = pi_fname.value;
    pi_mnamevalue = pi_mname.value;
    pi_lnamevalue = pi_lname.value;
    pi_gendervalue = pi_gender.value;
    pi_birthdatevalue = pi_birthdate.value;
    pi_contactnovalue = pi_contactno.value;
    pi_nationalityvalue = pi_nationality.value;
    pi_mstatusvalue = pi_mstatus.value;
    pi_emailvalue = pi_email.value;
    pi_paddressvalue = pi_paddress.value;
    pi_caddressvalue = pi_caddress.value;
    
    ec_fullnameval = ec_fullname.value;
    ec_contactnoval = ec_contactno.value;
    ec_emailval = ec_email.value;
    ec_relationshipval = ec_relationship.value;
    ec_addressval = ec_address.value;

    let pe_companyval = pe_company.value;
    let pe_positionval = pe_position.value;
    let pe_fromdateval = pe_fromdate.value;
    let pe_todateval = pe_todate.value;
    let pe_resonval = pe_reson.value;

    let b_acnthlderdnmval = b_acnthlderdnm.value;
    let b_banknmval = b_banknm.value;
    let b_accountnoval = b_accountno.value;
    let b_branchval = b_branch.value;
    let b_ifscval = b_ifsc.value;

    let ref_nameval = ref_name.value;
    let ref_relval = ref_rel.value;
    let ref_contactnoval = ref_contactno.value;
    let ref_emailval = ref_email.value;


    insertPersonalData(pi_fnamevalue,pi_mnamevalue,pi_lnamevalue,pi_gendervalue,pi_birthdatevalue,pi_contactnovalue,pi_nationalityvalue,pi_mstatusvalue,pi_emailvalue,pi_paddressvalue,pi_caddressvalue);
    insertEmergenyContact(ec_fullnameval,ec_contactnoval,ec_emailval,ec_relationshipval,ec_addressval);
    //insertEduData(edu_selectedtxt,edu_selectedvalue,eduniversity,edyoc,edschclg,percgp);
    inserPreviousEmploymentInformation(pe_companyval,pe_positionval,pe_fromdateval,pe_todateval,pe_resonval);
    insertBankingInfo(b_acnthlderdnmval,b_banknmval,b_accountnoval,b_branchval,b_ifscval);
    insertReferences(ref_nameval,ref_relval,ref_contactnoval,ref_emailval);

    console.log(formData);
    
}

function insertPersonalData(pi_fnamevalue,pi_mnamevalue,pi_lnamevalue,pi_gendervalue,pi_birthdatevalue,pi_contactnovalue,pi_nationalityvalue,pi_mstatusvalue,pi_emailvalue,pi_paddressvalue,pi_caddressvalue){   
    let personalData = {
        'fname':pi_fnamevalue,
        'mname':pi_mnamevalue,
        'lname':pi_lnamevalue,
        'gender': pi_gendervalue,
        'birthday': pi_birthdatevalue,
        'contactno' : pi_contactnovalue,
        'nationality':pi_nationalityvalue,
        'mstatus':pi_mstatusvalue,
        'email':pi_emailvalue,
        'paddress':pi_paddressvalue,
        'caddress':pi_caddressvalue
     };
     formData.personalInformation = personalData;
     
}
function insertEmergenyContact(ec_fullnameval,ec_contactnoval,ec_emailval,ec_relationshipval,ec_addressval){
    let emergencyData = {
        'ec_fullname': ec_fullnameval,
        'ec_contactno': ec_contactnoval,
        'ec_email': ec_emailval,
        'ec_relationship' : ec_relationshipval,
        'ec_address': ec_addressval
    }
    formData.emergencyContactInformation = emergencyData;
    
}

function inserPreviousEmploymentInformation(pe_companyval,pe_positionval,pe_fromdateval,pe_todateval,pe_resonval){
    let preEmpInfoData ={
        'pe_company' : pe_companyval,
        'pe_position' : pe_positionval,
        'pe_fromdate' : pe_fromdateval,
        'pe_todate' : pe_todateval,
        'pe_resonval' : pe_resonval

    }
    formData.previousEmploymentInformation = preEmpInfoData;   
}

function addPreviousEmpInfo(){
    // Getting education form data using document.getElement
    let edudetailtable = document.getElementById('edudetailtable');
    let education = document.getElementById("ed_dropdown");
    let eduniversity = document.getElementById('ed_university').value;
    let edyoc = document.getElementById('ed_yoc').value;
    let edschclg = document.getElementById('ed_schclg').value;
    let percgp = document.getElementById('ed_percgp').value;
    
    //Getting education dd text and data
    let edu_selectedtxt = education.options[education.selectedIndex].text;
    let edu_selectedvalue = education.options[education.selectedIndex].value;
    
    //if to check education dd selected value.
    if (education.selectedIndex != 0) {        
        
        //Getting table row HTML
        let tableRowBody = getTableRowHtml(eduniversity,edyoc,edschclg,percgp,edu_selectedtxt);
        
        //Getting table and table row with dd selected value as id
        let edutable = document.getElementById('edu_table');
        let tablerow = edutable.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[edu_selectedvalue];
    
        //If to check table row  and add data to education table 
        if (tablerow === undefined){ 
            let edutblebody = edutable.getElementsByTagName('tbody')[0];
            let newrow = edutblebody.insertRow();
            newrow.setAttribute("id", edu_selectedvalue);
            newrow.innerHTML = tableRowBody;
        }
        else{
            tablerow.innerHTML = tableRowBody;
        }
        edudetailtable.classList.remove('d-none');
        insertEduData(edu_selectedtxt,edu_selectedvalue,eduniversity,edyoc,edschclg,percgp);

        education.selectedIndex= 0;
        document.getElementById('ed_university').value = '';
        document.getElementById('ed_yoc').value = '';
        document.getElementById('ed_schclg').value = '';
        document.getElementById('ed_percgp').value = '';

    }
    else
    {
        alert('Please Select Education');
    }
}

function insertBankingInfo(b_acnthlderdnmval,b_banknmval,b_accountnoval,b_branchval,b_ifscval){
    let BankingInfo = {
        'b_acnthlderdnm' : b_acnthlderdnmval,
        'b_banknm' : b_banknmval,
        'b_accountno' : b_accountnoval,
        'b_branch' : b_branchval,
        'b_ifsc' : b_ifscval
    }
    formData.bankingInformation = BankingInfo;
}

function insertReferences(ref_nameval,ref_relval,ref_contactnoval,ref_emailval){
    let ReferenceData = {
        'ref_name' : ref_nameval,
        'ref_rel' : ref_relval,
        'ref_contactno' : ref_contactnoval,
        'ref_email' : ref_emailval
    }
    formData.References = ReferenceData;
}