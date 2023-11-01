export const mechVariantParser = (tokens) => {
    let res = [];
    tokens.map(token => {
        //DefenderTorsoPL04846
        if (token.includes('CM')) {
            res.push('CM')
        }
        else if (token.includes('DB')) {
            res.push('DB')
        }
        else if (token.includes('DG')) {
            res.push('DG')
        }
        else if (token.includes('PU')) {
            res.push('PU')
        }
        else if (token.includes('HZ')) {
            res.push('HZ')
        }
        else if (token.includes('CR')) {
            res.push('CR')
        }
        else if (token.includes('OB')) {
            res.push('OB')
        }
        else if (token.includes('EM')) {
            res.push('EM')
        }
        else if (token.includes('MR')) {
            res.push('MR')
        }
        else if (token.includes('PR')) {
            res.push('PR')
        }
        else if (token.includes('GR')) {
            res.push('GR')
        }
        else if (token.includes('JG')) {
            res.push('JG')
        }
        else if (token.includes('NV')) {
            res.push('NV')
        }
        else if (token.includes('PL')) {
            res.push('PL')
        }
    });
    return res;
}

export const mechTypeParser = (tokens) => {
    let res = [];
    tokens.map(token => {
        //DefenderTorsoPL04846
        if (token.includes('Defender')) {
            res.push('DEF')
        }
        else if (token.includes('Subterra')) {
            res.push('SBT')
        }
        else if (token.includes('Hydra')) {
            res.push('DSE')
        }
        else if (token.includes('Recon')) {
            res.push('DSP')
        }
        else if (token.includes('Reactor')) {
            res.push('NRG')
        }
    });
    return res;
}

export const mechPartParser = (tokens) => {
    let res = [];
    tokens.map(token => {
        //DefenderTorsoPL04846
        if (token.includes('Torso')) {
            res.push('torso')
        }
        else if (token.includes('LeftArm')) {
            res.push('leftarm')
        }
        else if (token.includes('RightArm')) {
            res.push('rightarm')
        }
        else if (token.includes('BackPack')) {
            res.push('backpack')
        }
        else if (token.includes('Legs')) {
            res.push('legs')
        }
    });
    return res;
}