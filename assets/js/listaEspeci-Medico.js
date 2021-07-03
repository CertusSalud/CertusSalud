let especialidad = ["Seleccione Especialidad","Cirugia", "Gastroenterología", "Ginecologia y Obstetricia",
        "Oncologia General","Otorrinolaringologia","Medicina General",
        "Oftalmología","Psiquiatría General","Radiología",
        "Endocrinologia"];
        let medico = ["Seleccione Medico","MEDICO 1","MEDICO 2", "MEDICO 3", "MEDICO 4", "MEDICO 5", "MEDICO 6", "MEDICO 7",
        "MEDICO 8", "MEDICO 9", "MEDICO 10", "MEDICO 11", "MEDICO 12", "MEDICO 13", "MEDICO 14", "MEDICO 15", "MEDICO 16",
        "MEDICO 17", "MEDICO 18", "MEDICO 19", "MEDICO 20", "MEDICO 21", "MEDICO 22", "MEDICO 23", "MEDICO 24"];

        let combobox1 = document.getElementById("combobox1");
        let combobox2 = document.getElementById("combobox2");

        function Recorrer(combobox, valores) {
            combobox2.innerHTML = "";
            for (let index of valores) {
                combobox.innerHTML += `<option>${index}</option>`;
            }
        }

        function llenarDepar() {
            Recorrer(combobox1, especialidad);
        }
        llenarDepar();

        combobox1.addEventListener("change", (e) => {
            let dato = e.target.value;

            switch (dato) {
                case "Seleccione Especialidad":
                    Recorrer(combobox2,medico.slice(0,0))
                case "Cirugia":
                    Recorrer(combobox2, medico.slice(1, 4));
                    break;
                case "Gastroenterología":
                    Recorrer(combobox2, medico.slice(4, 8));
                    break;
                case "Ginecologia y Obstetricia":
                    Recorrer(combobox2, medico.slice(12, 17));
                    break;
                default:
                    break;
            }
        });