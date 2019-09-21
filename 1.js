var Biodata = {
  "name"        : "Afif Wanda Julio",
  "age"         : 24,
  "address"     : "Pondok Cilegon Indah Blok D 108 no 12 Cilegon",
  "hobbies"     : ["swimming","cycling"],
  "is_married"  : false,
  "list school" : [
    {
      "name"       : "SMAN 2 KRAKATAU STEEL" ,
      "year_in"    : 2010,
      "year_out"   : 2013,
      "major"      : "Science",
    },
   {
      "name"       : "Universitas Brawijaya" ,
      "year_in"    : 2013,
      "year_out"   : 2017,
      "major"      : "Enviromental Engineering",
    } 
  ],
 "skills"       : [
   {
     "skill_name"  : "Javascript",
     "level"       : "beginner",
   },
   {
     "skill_name"  : "HTML",
     "level"       : "beginner",
   },
   {
     "skill_name"  : "CSS",
     "level"       : "beginner",
   },
 ],
  "interest_in_coding" : true,
}

var myBiodata = JSON.stringify(Biodata);
console.log(myBiodata);
