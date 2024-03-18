/*
 * @description Verifica se a chuva recebida por parâmetro está visível baseado
 * na data recebida. Retorna true ou false
 *
 * @param {Object} chuva
 * @param {Date} dataAtual
 * @returns {boolean}
 */
const verificaChuvaVisivelPorData = (chuva, dataAtual) => {
    const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim + '/' + anoAtual);

    if ( dataInicio.getMonth() + 1 > dataFim.getMonth() + 1 ) {
        const anoFinal = dataFim.getFullYear();
        dataFim.setFullYear(anoFinal +1);
    }

    return ( dataAtual >= dataInicio && dataAtual <= dataFim );
}

/*
 @description Verifica se a chuva recebida por parâmetro estará visível nos
 próximos 2 meses baseado na data recebida
 
 @param {object} chuva
 @param {Date} data
 @returns {boolean}
 */

const verificaChuvaVisivelProximos2Meses = (chuva, data) => {
    const dataAtual = data;
    const anoAtual = dataAtual.getFullYear();
    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(dataAtual);

    if ( dataAtual.getMonth() + 1 > dataInicio.getMonth() + 1 ) {
        const anoFinal = dataInicio.getFullYear();
        dataInicio.setFullYear(anoFinal +1);
    }

    dataFim.setMonth( dataFim.getMonth() + 2 );

    return ( dataAtual < dataInicio && dataInicio < dataFim );
}

/*
 * @description Inverte o mes e o dia de uma data que não possui ano definido
 *
 * @param {String} data
 */
const inverteMesAno = (data) => {
    const dataInvertida = data.split('/');

    return dataInvertida[1] + '/' + dataInvertida[0];
}

/*
 * @description Retorna um texto com a intensidade da chuva
 *
 * @param {String} intensidade
 */
const retornaIntensidade = (intensidade) => {
    let novaIntensidade = '1 (Fraca)';

    if ( intensidade.indexOf('Forte') >= 0 ) {
        novaIntensidade = '3 (Forte)';
    } else if ( intensidade.indexOf('Média') >= 0 ) {
        novaIntensidade = '2 (Média)';
    } else if (  intensidade.indexOf('Irregular') >= 0 ) {
        novaIntensidade = '(Irregular)';
    }

    return novaIntensidade;
}

/*
 * @description Retorna o hemisfério baseado no valor da declinação
 *
 * @param {Number} declinacao
 */
const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul';

export {verificaChuvaVisivelPorData, verificaChuvaVisivelProximos2Meses, inverteMesAno, retornaIntensidade, retornaHemisferio}