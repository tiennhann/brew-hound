import AmberAle from "../assets/updatedBeerImgs/AmericanAmberAle.png";
import AmberLager from "../assets/updatedBeerImgs/AmericanAmberLager.png";
import AmericanBarleyWine from "../assets/updatedBeerImgs/AmericanBarleyWine.png";
import AmericanBlackAle from "../assets/updatedBeerImgs/AmericanBlackAle.png";
import AmericanBrett from "../assets/updatedBeerImgs/AmericanBrett.png";
import AmericanBrownAle from "../assets/updatedBeerImgs/AmericanBrownAle.png";
import AmericanCreamAle from "../assets/updatedBeerImgs/AmericanCreamAle.png";
import AmericanImperialPorter from "../assets/updatedBeerImgs/AmericanImperialPorter.png";
import AmericanImperialRedAle from "../assets/updatedBeerImgs/AmericanImperialRedAle.png";
import AmericanImperialStout from "../assets/updatedBeerImgs/AmericanImperialStout.png";
import IndiaPaleAle from "../assets/updatedBeerImgs/AmericanIndiaIPA.png";
import AmericanPaleAle from "../assets/updatedBeerImgs/AmericanPaleAle.png";
import AmericanSour from "../assets/updatedBeerImgs/AmericanSour.png";
import AmericanStout from "../assets/updatedBeerImgs/AmericanStout.png";
import AmericanStyleWheatWineAle from "../assets/updatedBeerImgs/AmericanWheat.png";
import AmericanWheat from "../assets/updatedBeerImgs/AmericanWheatWine.png";
//When updating the BeerMenuList to add more beers, make sure that the index is added properly. 
//The index value is used as a argument passed in the url so that each beer has its own MoreInfo page
export const BeerMenuList = [
    {
        name: "American Amber Ale",
        image: AmberAle,
        ABV: "4.5-6.2%",
        IBU: "25-40",
        description:"An amber, hoppy, moderate-strength American craft beer with a malty caramel flavor. The balance can vary quite a bit, with some versions being fairly malty and others being aggressively hoppy. Hoppy and bitter versions should not have clashing flavors with the caramel malt profile.",
        Aroma:"Low to moderate hop aroma with characteristics typical of American or New World hop varieties (citrus, floral, pine, resinous, spicy, tropical fruit, stone fruit, berry, or melon)",
        Mouthfeel:"Medium to medium-full body. Medium to high carbonation. Overall smooth finish without astringency. Stronger versions may have a slight alcohol warmth.",
        color: "Deep amber to coppery-brown in color, sometimes with a reddish hue. Moderately large off-white head with good retention. Generally quite clear.",
        FoodParing: "Chicken, seafood, burgers. Great with spicy cuisine.",
        index: 0
    },
    {
        name: "American Lager",
        image: AmberLager,
        ABV: "4.2-5.3%",
        IBU: "8-12",
        description: "A very pale, highly-carbonated, lightbodied, well-attenuated lager with a very neutral flavor profile and low bitterness. Served very cold, it can be a very refreshing and thirst-quenching drink.",
        Aroma:"Low malt aroma optional, but may be perceived as grainy, sweet, or corn-like, if present. Light spicy, floral, or herbal hop aroma optional",
        Mouthfeel:"Very light, sometimes watery, body. Very highly carbonated with slight carbonic bite on the tongue.",
        color: "Very pale straw to pale yellow color. White, frothy head seldom persists. Very clear",
        FoodParing: "Shellfish; light seafood; sushi; grilled pork and chicken; not-too-heavy pasta dishes (without cream or meat sauces); Southeast Asian food; Latin food; Mexican food; spicy food.",
        index: 1
    },
    {
        name: "American BarleyWine",
        image: AmericanBarleyWine,
        ABV: "8.0-12.0%",
        IBU: "50-100",
        description:"A very strong, malty, hoppy, bitter American ale with a rich palate, full mouthfeel, and warming aftertaste, suitable for contemplative sipping.",
        Aroma:"Strong malt and hop aroma dominates. Hops are moderate to assertive, showing a range of American, New World, or English characteristics. Citrusy, fruity, or resiny are classic attributes, but others are possible, including those from modern hops. Strong grainy, bready, toasty, light caramel, or neutral malt richness, but typically not with darker caramel, roast, or deep fruit aspects",
        Mouthfeel:"A smooth alcohol warmth should be noticeable, but shouldn’t burn. Carbonation may be low to moderate, depending on age and conditioning",
        color: "Color ranges from amber to medium copper,rarely up to light brown",
        FoodParing: "Barley wine has strong flavors of it’s own and easily overpowers most main dishes.  It’s common to see it matched up with strong cheese or dessert.  Think of it more like port – a great after dinner drink on it’s own, wonderful with stilton and walnuts or with something rich and sweet like chocolate torte",
        index: 2
    },
    {
        name: "Black IPA",
        image: AmericanBlackAle,
        ABV: "6.0-9.0%",
        IBU: "50-90",
        description:"A beer with the dryness, hop-forward balance, and flavor characteristics of an American IPA, but darker malts add a gentle and supportive flavor, not a strongly roasted or burnt character.",
        Aroma:"Moderate to high hop aroma, often with stone fruit, tropical, citrusy, resinous, pine, berry, or melon character. Very low to moderate malt, possibly with light chocolate, coffee, or toast notes, as well as background caramel sweetness. Clean fermentation Profile, bit light esters acceptable.",
        Mouthfeel:"Smooth Medium-light to medium body. Medium carbonation. Light creaminess optional. light warmth optional.",
        color: "Very Dark to Black",
        FoodParing: "Grilled Shrimp and Grits, Blue Cheeses, Aged Gouda, Chocolate Truffles",
        index: 3
    },
    {
        name: "American Brett",
        image: AmericanBrett,
        ABV: "4.5-6.0%",
        IBU: "50-100",
        description:": Horsey, goaty, leathery, phenolic and some fruity acidic character derived from Brettanomyces organisms may be evident, but in balance with other components of an American Brett beer.",
        Aroma:"Tropical, Floral, sour, or tart aroma",
        Mouthfeel:"Moderate to high carbonation level, Finish is dry, with earthy after tastes.",
        color: "Varies",
        FoodParing: "Grilled or Roasted Game, Earthy Farmhouse Cheeses, Fruit-Filled Pastries",
        index: 4
    },
    {
        name: "American Brown Ale",
        image: AmericanBrownAle,
        ABV: "4.3-6.2%",
        IBU: "20-30",
        description:"A malty but hoppy standard-strength American ale frequently with chocolate and caramel flavors. The hop flavor and aroma complement and enhance the malt rather than clashing with it.",
        Aroma:"Moderate malty-sweet to malty-rich aroma with chocolate, caramel, nutty, or toasty qualities. Hop aroma is typically low to moderate, of almost any type that complements the malt",
        Mouthfeel:"Medium to medium-full body. More bitter versions may have a dry, resiny impression. Moderate to moderately-high carbonation. Stronger versions may be lightly warming.",
        color: "Light to very dark brown color. Clear. Low to moderate off-white to light tan head",
        FoodParing: "Hearty foods: roast pork, smoked sausage, grilled salmon.",
        index: 5
    },
    {
        name: "American Cream Ale",
        image: AmericanCreamAle,
        ABV: "4.2-5.6%",
        IBU: "15-30",
        description:"A clean, well-attenuated, highlycarbonated, flavorful American “lawnmower” beer. Easily drinkable, smooth, and refreshing, with more character than typical American lagers, yet still subtle and restrained.",
        Aroma:"Medium-low to low malt notes, with a sweet, cornlike aroma. Low DMS optional. Medium-low hop aroma optional, using any variety but floral, spicy, or herbal notes are most common. Overall, has a subtle, balanced aroma. Low fruity esters optional",
        Mouthfeel:"Generally light and crisp, although body can reach medium. Smooth mouthfeel with medium to high attenuation; higher attenuation levels can lend a “thirst quenching” quality. High carbonation.",
        color: "American Cream Ale is typically a light to medium gold color with a good clarity. It can range from pale straw to a deeper golden colr depending on the recipe and brewing process.",
        FoodParing: "Grilled Meats, Salads, Spicy Foods, Seafood, Light Fare.",
        index: 6
    },
    {
        name: "American Imperial Porter",
        image: AmericanImperialPorter,
        ABV: "9.3%",
        IBU: "35-50",
        description:"Definitively American, the imperial porter should have no roasted barley flavors or strong burnt/black malt character. Medium caramel and cocoa-like sweetness is present, with complementing hop character and malt-derived sweetness",
        Aroma:"Noticeable Alcohol aroma with a low to medium-high hop aroma.",
        Mouthfeel:"Full-bodied, with mediumcarbination. Medium malt, caramel and cocoa-like sweetness is present",
        color: "Dark Brown, Black, Tan to a brown head.",
        FoodParing: "Great Match for hearty and flavorful dishes. This includes: grilled or roasted meats, smoked meats, BBQ, smoked Gouda, butterscotch brownies",
        index: 7
    },
    {
        name: "Irish Red Ale",
        image: AmericanImperialRedAle,
        ABV: "3.8-5.0%",
        IBU: "18-28",
        description:"An easy-drinking pint, often with subtle flavors. Slightly malty in the balance sometimes with an initial soft toffee or caramel sweetness, a slightly grainybiscuity palate, and a touch of roasted dryness in the finish. Some versions can emphasize the caramel and sweetness more, while others will favor the grainy palate and roasted dryness",
        Aroma:"Low to moderate malt aroma, either neutral-grainy or with a lightly caramel, toast, or toffee character. Very light buttery character optional. Low earthy or floral hop aroma optional. Quite clean.",
        Mouthfeel:"Full bodied with moderate to high carbonation level. Usually smooth",
        color: "Medium amber to medium reddish-copper color. Clear. Low off-white to tan colored head, average persistence.",
        FoodParing: "Spicy beef or chicken fajitas, BBQ, Pulled Pork.",
        index: 8
    },
    {
        name: "Irish Stout",
        image: AmericanImperialStout,
        ABV: "7.5-13%",
        IBU: "25-45",
        description:"A black beer with a pronounced roasted flavor, often similar to coffee. The balance can range from fairly even to quite bitter, with the more balanced versions having a little malty sweetness and the bitter versions being quite dry. Draught versions typically are creamy from a nitro pour, but bottled versions will not have this dispensederived character. The roasted flavor can range from dry and coffee-like to somewhat chocolaty",
        Aroma:"Moderate coffee-like aroma typically dominates; mayhave slight dark chocolate, cocoa, or roasted grain secondary notes",
        Mouthfeel:"Medium-light to medium-full body, with asomewhat creamy character – especially when served by nitro pour. Low to moderate carbonation. For the high hop bitterness and significant proportion of dark grains present, this beer is remarkably smooth.",
        color: "Jet Black to deep brown with garnet highlights in color",
        FoodParing: "American Imperial Stout pairs well with rich, bold flavors such as dark chocolate, espresso, roasted meats, strong cheeses, and hearty stews. It can also be enjoyed with desserts like chocolate cake, brownies, and ice cream. The robust and complex flavors of the beer complement the intensity of these dishes. ",
        index: 9
    },
    {
        name: "American India Pale Ale/IPA",
        image: IndiaPaleAle,
        ABV: "5.0-7.5%",
        IBU: "40-70",
        description:"A decidedly hoppy and bitter, moderately strong, pale American ale. The balance is hopforward, with a clean fermentation profile, dryish finish, and clean, supporting malt allowing a creative range of hop character to shine through.",
        Aroma:"A prominent to intense hop aroma often featuring American or New World hop characteristics, such as citrus, floral, pine, resin, spice, tropical fruit, stone fruit, berry, or melon.",
        Mouthfeel:"Medium-light to medium body, with a smoothtexture. Medium to medium-high carbonation.",
        color: "Color ranging from medium gold to light reddish-amber. Clear, but light haze allowable",
        FoodParing: "Curries, Mexican food, Sharp cheeses, Grilled meats.",
        index: 10
    },
    {
        name: "American Pale Ale",
        image: AmericanPaleAle,
        ABV: "3.2-3.8%",
        IBU: "30-50",
        description:"An average-strength, hop-forward, pale American craft beer with sufficient supporting malt to make the beer balanced and drinkable",
        Aroma:"Moderate to moderately-high hop aroma from American or New World hop varieties with a wide range of possible characteristics, including citrus, floral, pine, resin, spice, tropical fruit, stone fruit, berry, or melon. None of these specific characteristics are required, but a hoppy aroma should be apparent.",
        Mouthfeel:"Medium-light to medium body. Moderate to high carbonation. Overall smooth finish without astringency or harshness.",
        color: "Pale golden to amber. Moderately large white to off-white head with good retention. Generally quite clear.",
        FoodParing: "Mexican food, Curries, Grilled meats such as burgers, steaks, or BBQ",
        index: 11
    },
    {
        name: "American Sour",
        image: AmericanSour,
        ABV: "4.5-7.0%",
        IBU: "3-8",
        description:"A pale, refreshing, sour beer with a clean lactic sourness. A gentle, pale malt flavor supports the lemony sourness with moderate fruity esters.",
        Aroma:"A sharply sour character is dominant (moderatelyhigh to high). Can have up to a moderately fruity character (often peach, apricot, lemon, or tart apple). No hop aroma.",
        Mouthfeel:"Light body. Moderate to high carbonation. Never hot, although higher gravity examples can have a warming alcohol character.",
        color: "Very pale in color. Clarity ranges from clear to somewhat hazy",
        FoodParing: "Salads with dressings, with fruit or cheese. Ceviche or sushi rolls",
        index: 12
    },
    {
        name: "American Stout",
        image: AmericanStout,
        ABV: "5-7%",
        IBU: "35-75",
        description:"A fairly strong, highly roasted, bitter, hoppy dark stout. The body and dark flavors typical of stouts with a more aggressive American hop character and bitterness.",
        Aroma:"Moderate to strong roast aroma, often with a roasted coffee or dark chocolate quality. Burnt or charcoal aromas are acceptable at low levels",
        Mouthfeel:"Full-bodied with a moderate to high carbonation level",
        color: "Dark, Roasty Flavor, Coffee color.",
        FoodParing: "Hearty Stews and chili, creamy desserts such as chocolate cake or cheese cake.",
        index: 13
    },
    {
        name: "American Style Wheatwine",
        image: AmericanStyleWheatWineAle,
        ABV: "8.5-12.2%",
        IBU: "45-85",
        description:"Part of the “strong ale” category, the American-Style Wheat Wine Ale is not derived from grapes as its name might suggest. Made with at least 50 percent wheat malt, this full-bodied beer features bready and candy flavors, and finishes with a great deal of malty sweetness. These beers may be oak-aged and sometimes have small amounts of darker malts added.",
        Aroma:"Hop aroma and flavor are low to medium. Bready, wheat, honey-like and/or caramel malt aromas are often present",
        Mouthfeel:"Full bodied with moderate to low carbonation.",
        color: "Golden, Amber color. May have slight haze",
        FoodParing: "Lamb, Pork, Beef. The sweetness can help balance the heat of spicy and curries.",
        index: 14
    },
    {
        name: "American Wheat",
        image: AmericanWheat,
        ABV: "4.0-5.5%",
        IBU: "15-30",
        description:"A pale, refreshing grainy, doughy, or bready wheat beer with a clean fermentation profile and a variable hop character and bitterness. Its lighter body and higher carbonation contribute to its easy-drinking nature",
        Aroma:"Low to moderate grainy, bready, or doughy wheat character. A light to moderate malty sweetness is acceptable.",
        Mouthfeel:"Medium-light to medium body. Medium-high to high carbonation. Slight creaminess is optional; wheat beers sometimes have a soft, ‘fluffy’ impression.",
        color: "Usually pale yellow to gold. Clarity may range from brilliant to hazy with yeast approximating a Weissbier.",
        FoodParing: "Salads, Seafood, Lighter proteins, spicy foods, citrus.",
        index: 15
    },
];