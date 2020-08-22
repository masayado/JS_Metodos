document.write('<h2>Estadisticas Centro Medico Ñuñoa</h2>');

//Variables y sus respectivos array de objetos

var Radiologia = [
    {hora:"11:00", especialista:"IGNACIO SCHULZ",        paciente:"FRANCISCA ROJAS", rut:"9.878.782-1", prevision:"FONASA"},
    {hora:"11:30", especialista:"FEDERICO SUBERCASEAUX", paciente:"PAMELA ESTRADA", rut:"15.345.241-3", prevision:"ISAPRE"},
    {hora:"15:00", especialista:"FERNANDO WURTHZ",       paciente:"ARMANDO LUNA", rut:"16.445.345-9", prevision:"ISAPRE"},
    {hora:"15:30", especialista:"ANA MARIA GODOY",       paciente:"MANUEL GODOY", rut:"17.666.419-0", prevision:"FONASA"},
    {hora:"16:00", especialista:"PATRICIA SUAZO",        paciente:"RAMON ULLOA", rut:"14.989.389-K", prevision:"FONASA"}
]

var Traumatologia = [
    {hora:"08:00", especialista:"MARIA PAZ ALTUZARRA", paciente:"PAULA SANCHEZ", rut:"15.554.774-5", prevision:"FONASA"},
    {hora:"10:00", especialista:"RAUL ARAYA", paciente:"ANGÉLICA NAVAS", rut:"15.444.147-9", prevision:"ISAPRE"},
    {hora:"10:30", especialista:"MARIA ARRIAGADA", paciente:"ANA KLAPP", rut:"17.879.423-9", prevision:"ISAPRE"},
    {hora:"11:00", especialista:"ALEJANDRO BADILLA", paciente:"FELIPE MARDONES", rut:"1.547.423-6", prevision:"ISAPRE"},
    {hora:"11:30", especialista:"CECILIA BUDNIK", paciente:"DIEGO MARRE", rut:"16.554.741-K", prevision:"FONASA"},
    {hora:"12:00", especialista:"ARTURO CAVAGNARO", paciente:"CECILIA MENDEZ", rut:"9.747.535-8", prevision:"ISAPRE"},
    {hora:"12:30", especialista:"ANDRES KANACRI", paciente:"MARCIAL SUAZO", rut:"11.254.785-5", prevision:"ISAPRE"}
]

var Dental = [
    {hora:"08:30", especialista:"ANDREA ZUÑIGA", paciente:"MARCELA RETAMAL", rut:"11.123.425-6", prevision:"ISAPRE"},
    {hora:"11:00", especialista:"MARIA PIA ZAÑARTU", paciente:"ANGEL MUÑOZ", rut:"9.878.789-2", prevision:"ISAPRE"},
    {hora:"11:30", especialista:"SCARLETT WITTING", paciente:"MARIO KAST", rut:"7.998.789-5", prevision:"FONASA"},
    {hora:"13:00", especialista:"FRANCISCO VON TEUBER", paciente:"KARIN FERNANDEZ", rut:"18.887.662-K", prevision:"FONASA"},
    {hora:"13:30", especialista:"EDUARDO VIÑUELA", paciente:"HUGO SANCHEZ", rut:"17.665.461-4", prevision:"FONASA"},
    {hora:"14:00", especialista:"RAQUEL VILLASECA", paciente:"ANA SEPULVEDA", rut:"14.441.281-0", prevision:"ISAPRE"}
]

//1- Agregar las siguientes horas al arreglo de Traumatología

Traumatologia.push(
{hora:"09:00",  especialista: "RENÉ POBLETE",    paciente: "ANA GELLONA",    rut: "13.123.329-7", prevision: "ISAPRE"},
{hora:"09:30",  especialista: "MARIA SOLAR",     paciente: "RAMIRO ANDRADE", rut: "12.221.451-K", prevision: "FONASA"},
{hora: "10:00", especialista: "RAUL LOYOLA",     paciente: "CARMEN ISLA",    rut: "10.112.348-3", prevision: "ISAPRE"},
{hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA",   rut: "13.453.234-1", prevision: "ISAPRE"},
{hora: "12:00", especialista: "MATIAS ARAVENA",  paciente: "SUSANA POBLETE", rut: "14.345.656-6", prevision: "FONASA"});

//2- Eliminar el primer y último elemento del arreglo de Radiología

Radiologia.pop();
Radiologia.shift();

//3- Imprimir en la página, la lista de consultas médicas de Dental

document.write('<h4>Consultas médicas Dental</h4>');

Dental.forEach((datospacientes,index) => {
    document.write(`<p> ${datospacientes.hora} - ${datospacientes.especialista} - ${datospacientes.paciente} - ${datospacientes.rut} - ${datospacientes.prevision}</p>`); 
});

//4- Imprimir listado de todos los pacientes que se atendieron en el centro médico

document.write('<h4>Listado de todos los pacientes que se atendieron en el Centro Médico</h4>');

var todos_los_pacientes = Radiologia.concat(Traumatologia, Dental);

todos_los_pacientes.forEach(printpacientes);
function printpacientes (elemento, index, array) {
    document.write(`<p> ${todos_los_pacientes[index].paciente} </p>`);
}

//5- 5. Modificar mediante funciones las previsiones de Dental: aquellas que indican ser FONASA cambiarlas por ISAPRE y viceversa.

Dental = Dental.map((pacientes)=> {
    if (pacientes.prevision === "FONASA") {
    pacientes.prevision = "ISAPRE";
    } else {
    pacientes.prevision = "FONASA";
    }
    return pacientes;
    });

//Luego, imprimir este resultado junto con el rut asociado a dicha consulta, separados por punto y coma.

document.write('<h4>Resultado de cambio de previsión de var Dental de FONASA A ISAPRE y viceversa</h4>');

Dental.forEach(printprevision);
function printprevision (elemento, index, array) {
    document.write(`<p>${Dental[index].prevision} ; ${Dental[index].paciente} ; ${Dental[index].rut}</p>`);
 }
//Cantidad de atenciones

document.write('<h4>Cantidad de Atenciones</h4>');

document.write(`<p>Cantidad de Atenciones para Radiología: ${Radiologia.length}</p>`);
document.write(`<p>Cantidad de Atenciones para Traumatología: ${Traumatologia.length}</p>`);
document.write(`<p>Cantidad de Atenciones para Dental: ${Dental.length}</p>`);

//Primeras y ultimas atenciones

document.write('<h4>Primeras y ultimas atenciones</h4>');

document.write('<b>Radiología</b>');
document.write(`<p>Primera atención: ${Radiologia[0].paciente} - Rut: ${Radiologia[0].rut} - Previsión: ${Radiologia[0].prevision} <b>|</b> Ultima atención: ${Radiologia[Radiologia.length -1].paciente} - Rut: ${Radiologia[Radiologia.length -1].rut} - Previsión: ${Radiologia[Radiologia.length -1].prevision}</p>`)

document.write('<b>Traumatología</b>');
document.write(`<p>Primera atención: ${Traumatologia[0].paciente} - Rut: ${Traumatologia[0].rut} - Previsión: ${Traumatologia[0].prevision} <b>|</b> Ultima atención: ${Traumatologia[Traumatologia.length-1].paciente} - Rut: ${Traumatologia[Traumatologia.length-1].rut} - Previsión: ${Traumatologia[Traumatologia.length-1].prevision}</p>`)

document.write('<b>Dental</b>');
document.write(`<p>Primera atención: ${Dental[0].paciente} - Rut: ${Dental[0].rut} - Previsión: ${Dental[0].prevision} <b>|</b> Ultima atención: ${Dental[Dental.length-1].paciente} - Rut: ${Dental[Dental.length-1].rut} - Previsión: ${Dental[Dental.length-1].prevision}</p>`)
