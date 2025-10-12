console.log("FOR SUPER EARTH!");

const AUTOMATONS = [".treason"]
AUTOMATONS.forEach(selector => {
    try {
        const tinCans = document.querySelectorAll(selector);

        if (tinCans.length > 0)
        {
            console.log(`Found ${tinCans.length} tin can(s) to scrap with selector: "${selector}"`);

            tinCans.forEach(element =>
                            {
                element.style.display = 'none';
            });
        }
        else
        {
            console.log(`No tin cans found for selector: "${selector}". The area is clear.`);
        }
    }

    catch (error)
    {
        console.error(`No tin cans to shoot, Helldiver. Seems the "${selector}" intel was provided by enemies of Democracy`, error);
    };});