var image1 = ["abstract",
"act",
"action",
"actuality",
"adventure",
"affair",
"aggregation",
"alignment",
"amalgamation",,
"amoeba",
"animal",
"article",
"assemblage",
"assembly",
"bacilli",
"beast",
"being",
"blend",
"body",
"breath",
"cell",
"chemistry",
"ciliate",
"clay",
"coalescence",
"coherence",
"collectivity",
"combination",
"complex",
"composite",
"composition",
"compound",
"configuration",
"conformation",
"consciousness",
"consideration",
"constitution",
"construction",
"continuance",
"coordination",
"creation",
"creature",
"design",
"disposal",
"egg",
"endurance",
"ensemble",
"entirety",
"entity",
"episode",
"essence",
"euglena",
"everything",
"evidence",
"existence",
"experience",
"factor",
"family",
"feature",
"flagellate",
"flesh",
"flesh and blood",
"format",
"formation",
"forming",
"formulation",
"framework",
"fullness",
"fusion",
"germs",
"gross",
"grouping",
"growth",
"happening",
"harmony",
"human",
"human being",
"inanimate",
"incident",
"incipient",
"individual",
"information",
"institution",
"integral",
"integrating",
"integration",
"item",
"jackpot",
"kids",
"kin",
"linkage",
"living",
"living being",
"living thing",
"lump",
"man",
"manifestation",
"material",
"matter",
"metabolism",
"method",
"methodology",
"microbes",
"morphon",
"mortal",
"mortal being",
"nucleus",
"occurrence",
"offspring",
"organism",
"organisms",
"organization",
"organizing",
"pathogens",
"pattern",
"person",
"personage",
"phenomenon",
"piece",
"plan",
"planning",
"plant",
"plasmodium",
"point",
"presence",
"proceeding",
"quantity",
"quantum",
"regulation",
"relatives",
"result",
"running",
"situation",
"something",
"soul",
"specific",
"sporozoan",
"standard",
"standardization",
"statistic",
"stentor",
"structure",
"stuff",
"subsistence",
"substance",
"substantiality",
"supply",
"survival",
"symbiosis",
"symmetry",
"system",
"the works",
"thing",
"transaction",
"truism",
"unification",
"union",
"unit",
"unity",
"viability",
"vital spark",
"vitality",
"whole",
"wildlife",
"woman"];
var image2 = ["accessory",
"action",
"activity",
"adjustment",
"advance",
"agency",
"agent",
"aid",
"anything",
"apparatus",
"appliance",
"approach",
"arrangement",
"article",
"automaton",
"automobile",
"avenue",
"backdrop",
"barrel",
"being",
"bicycle",
"boat",
"body",
"book",
"buggy",
"bus",
"business",
"cab",
"car",
"carrier",
"case",
"channel",
"channels",
"chariot",
"circumstance",
"coinage",
"commodity",
"components",
"computer",
"concept",
"condition",
"configuration",
"construction",
"contraption",
"course",
"crate",
"creation",
"creature",
"cylinder",
"design",
"development",
"device",
"diesel",
"dingbat",
"discovery",
"disposal",
"disposition",
"dodge",
"doodad",
"doohickey",
"efficiency",
"element",
"engine",
"entity",
"equipment",
"everything",
"evolution",
"existence",
"existent",,
"fact",
"factor",
"fan",
"fashion",
"figure",
"force",
"form",
"formation",
"formula",
"framework",
"furnishings",
"gadget",
"gaff",
"gear",
"generator",
"gimmick",
"gizmo",
"goods",
"growth",
"habit",
"horses",
"implement",
"individual",
"influence",
"information",
"instrument",
"intermediary",
"intermediate",
"intervention",
"invention",
"item",
"job",
"line",
"logistics",
"machine",
"machinery",
"makeshift",
"manner",
"material",
"materiality",
"material",
"matter",
"means",
"measure",
"mechanism",
"mediation",
"medium",
"method",
"mode",
"modus",
"motor",
"motorcycle",
"movement",
"nuts and bolts",
"object",
"operation",
"organ",
"organization",
"outfit",
"outgrowth",
"paraphernalia",
"part",
"path",
"performance",
"person",
"phenomenon",
"piece",
"piston",
"place",
"plan",
"point",
"portion",
"posture",
"pot",
"power",
"power plant",
"practice",
"procedure",
"process",
"program",
"progress",
"progression",
"provisions",
"recipe",
"resort",
"resource",
"rig",
"rigging",
"ritual",
"road",
"robot",
"route",
"routine",
"rubber band",
"rube goldberg device",
"rubric",
"rule",
"rut",
"scene",
"schema",
"scheme",
"seer",
"setup",
"shape",
"shift",
"shifts",
"shortcut",
"situation",
"stage",
"state",
"status",
"step",
"structure",
"stuff",
"style",
"subject",
"substance",
"suit",
"supplies",
"system",
"tack",
"tackle",
"tactic",
"tactics",
"taxi",
"technic",
"technique",
"tenor",
"the book",
"thingamabob",
"thingamajig",
"tone",
"tool",
"tools",
"transaction",
"transformer",
"transport",
"trial",
"trick",
"truck",
"turbine",
"unfolding",
"usage",
"utensil",
"van",
"vector",
"vehicle",
"vein",
"venue",
"wagon",
"weapon",
"wheels",
"widget",
"word",
"workings",,
"wrinkle"];
var image_manipulation = ["blend", "warp", "outline", "pixellate", "stretch", "invert", "replicate", "extrude"];
var material = ["nylon", "mylar", "poly satin", "brushed tricoat", "linen", "poly mesh"];
var material_manipulation1 = ["constricted", "twisted", "stretched", "spray painted", "soaked", "cut", "folded", "crumpled"];
var material_manipulation2 = material_manipulation1;

var google_start = "https://www.google.com/search?q=";
var google_end = "&tbm=isch";

function doFunction() {

	var my_image1 = image1[Math.floor(Math.random() * image1.length)];
	var my_image2 = image2[Math.floor(Math.random() * image2.length)];
	var my_image_manipulation = image_manipulation[Math.floor(Math.random() * image_manipulation.length)];
	var my_material = material[Math.floor(Math.random() * material.length)];
	var my_material_manipulation1 = material_manipulation1[Math.floor(Math.random() * material_manipulation1.length)];
	var my_material_manipulation2 = my_material_manipulation1;
	while (my_material_manipulation2 == my_material_manipulation1) {
		my_material_manipulation2 = material_manipulation2[Math.floor(Math.random() * material_manipulation2.length)];
	}

	$('#message').css("display","block");

	$('#image1').html(my_image1);	
	$("a#image1").attr("href", google_start + my_image1 + google_end);
	
	$('#image2').html(my_image2);
	$("a#image2").attr("href", google_start + my_image2 + google_end);

	$('#image_manipulation').html(capitalizeFirstLetter(my_image_manipulation));	
	$("a#image_manipulation").attr("href", google_start + my_image_manipulation + google_end);

	$('#material').html(my_material);
	$("a#material").attr("href", google_start + my_material + google_end);

	$('#material_manipulation1').html(my_material_manipulation1);
	$("a#material_manipulation1").attr("href", google_start + my_material_manipulation1 + google_end);

	$('#material_manipulation2').html(my_material_manipulation2);
	$("a#material_manipulation2").attr("href", google_start + my_material_manipulation2 + google_end);
};

function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}