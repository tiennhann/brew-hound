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
        description:": A beer with the dryness, hop-forward balance, and flavor characteristics of an American IPA, but darker malts add a gentle and supportive flavor, not a strongly roasted or burnt character.",
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
        color: ": Light to very dark brown color. Clear. Low to moderate off-white to light tan head",
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
        Mouthfeel:"Full bodied, with low to moderate carbonation.",
        color: "Very Dark Beer, Deep Brown, Tan Head, Bitch Black beer.",
        FoodParing: "American Imperial Stout pairs well with rich, bold flavors such as dark chocolate, espresso, roasted meats, strong cheeses, and hearty stews. It can also be enjoyed with desserts like chocolate cake, brownies, and ice cream. The robust and complex flavors of the beer complement the intensity of these dishes. ",
        index: 9
    },
    {
        name: "American India Pale Ale/IPA",
        image: IndiaPaleAle,
        ABV: "5.0-7.5%",
        description:"loral, fruity, citrus-like, piney or resinous American-variety hop character, the IPA beer style is all about hop flavor, aroma and bitterness.",
        Aroma:"Strong hop aroma, with notes of citrus, pine, and floral aromas.",
        Mouthfeel:"medium bodied, with moderate to high carbonation level.",
        color: "Golden to the deep amber.",
        FoodParing: "Curries, Mexican food, Sharp cheeses, Grilled meats.",
        index: 10
    },
    {
        name: "American Pale Ale",
        image: AmericanPaleAle,
        ABV: "3.2-3.8%",
        description:": Hop and malt character similar to aroma (same intensities and descriptors apply). Caramel flavors are often absent or fairly restrained, but are acceptable as long as they don’t clash with the hops. Moderate to high bitterness. Clean fermentation profile. Fruity yeast esters can be moderate to none, although many hop varieties are quite fruity. Medium to dry finish. The balance is typically towards the late hops and bitterness; the malt presence should be supportive, not distracting. Hop flavor and bitterness often linger into the finish, but the aftertaste should generally be clean and not harsh. Fresh dry-hop flavor optional.",
        Aroma:"Moderate hop aroma, with notes of citrus and pine",
        Mouthfeel:"Medium bodied, with moderate to high carbonation level",
        color: "Light golden to amber.",
        FoodParing: "Mexican food, Curries, Grilled meats such as burgers, steaks, or BBQ",
        index: 11
    },
    {
        name: "American Sour",
        image: AmericanSour,
        ABV: "~6.0%",
        description:": The profiles of the resulting brews vary wildly, but most of them have a tart, acidic flavor, like biting into raspberries soaked in champagne. American sours fall under the sour ale umbrella, with the differentiating factor being that they're made in America.",
        Aroma:"tart aroma, with notes of citrus",
        Mouthfeel:"typically light to medium bodied with low to moderate carbonation.",
        color: "Amber to reddish brown.",
        FoodParing: "Salads with dressings, with fruit or cheese. Ceviche or sushi rolls",
        index: 12
    },
    {
        name: "American Stout",
        image: AmericanStout,
        ABV: "5.5-8.5%",
        description:": Moderate to very high roasted flavors, often tasting of coffee, dark or bittersweet chocolate, or roasted coffee beans. May taste of slightly burnt coffee grounds, but this character should not be prominent. Low to medium malt sweetness, often with rich chocolate or caramel flavors. Medium to high bitterness. Low to high hop flavor, generally citrusy or resiny. Medium to dry finish, occasionally with a lightly burnt quality. Low esters optional. Light but smooth alcohol flavor optional.",
        Aroma:"Strong roasted malt aroma, notes of chocolate, coffee",
        Mouthfeel:"Full-bodied with a moderate to high carbonation level",
        color: "Dark, Roasty Flavor, Coffee color.",
        FoodParing: "Hearty Stews and chili, creamy desserts such as chocolate cake or cheese cake.",
        index: 13
    },
    {
        name: "American Style Wheat Wine Ale",
        image: AmericanStyleWheatWineAle,
        ABV: "8.5-12.2%",
        description:": bready, doughy, or cracker-like, which can extend into the finish. Hop bitterness should be higher than a German Wheat but remain modest, in the range of low to medium. The bitterness can linger into a somewhat crisp finish or disappear behind a slightly sweeter end.",
        Aroma:"Has moderate to strong malt aroma, with notes of bread, biscuit, or caramel.",
        Mouthfeel:"Full bodied with moderate to low carbonation.",
        color: "Golden, Amber color.",
        FoodParing: "Lamb, Pork, Beef. The sweetness can help balance the heat of spicy and curries.",
        index: 14
    },
    {
        name: "American Wheat",
        image: AmericanWheat,
        ABV: "4.0-5.5%",
        description:": Light to moderately-strong bready, doughy, or grainy wheat flavor, which can linger into the finish. May have a moderate malty sweetness or can finish quite dry and crisp.Low to moderate hop bitterness, sometimes lasting into the finish. Balance is usually even, but may be slightly bitter. Low to moderate citrusy, spicy, floral, or fruity hop flavor. Moderate esters optional. No banana. No clove phenols. ",
        Aroma:"American wheat beer typically has a moderate to low malt aroma, with notes of bread, biscuit, and or cereal.",
        Mouthfeel:"typically light to medium bodied with high carbonation.",
        color: "Light amber color",
        FoodParing: "Salads, Seafood, Lighter proteins, spicy foods, citrus.",
        index: 15
    },
];