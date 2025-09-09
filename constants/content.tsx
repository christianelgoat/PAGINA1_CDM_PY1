import React from 'react';
import type { Criterion } from '../types';
import { DocumentTextIcon, BeakerIcon, ChartBarIcon, SparklesIcon } from '../components/icons';

export const criteriaData: Criterion[] = [
    {
        id: 1,
        title: "Resumen y Propósito",
        icon: DocumentTextIcon,
        objective: "El grupo explica el resumen de forma clara y concisa, reflejando una comprensión precisa del tema y el objetivo principal del artículo.",
        analysis: {
            title: "Análisis para Lograr el Objetivo",
            content: (
                <div className="space-y-4">
                    <p>Para cumplir con este criterio, debemos extraer la idea central y la finalidad del texto directamente del título y del "ABSTRACTO".</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600">
                        <li><strong>Tema Principal:</strong> El artículo trata sobre los biosensores. Se enfoca en sus avances, estructura, principios, clasificación y, crucialmente, su aplicación en la biofabricación.</li>
                        <li><strong>Problema que Aborda:</strong> La biofabricación, clave para la bioeconomía, es compleja y requiere control preciso. La "biofabricación inteligente" necesita herramientas potentes para monitorear información bioquímica en tiempo real.</li>
                        <li><strong>Propósito Principal del Artículo:</strong> Revisar y analizar el estado actual de la tecnología de biosensores. Según el abstracto, el artículo se propone:
                            <ul className="list-['-_'] list-inside space-y-1 pl-6 mt-2">
                                <li>Revisar la estructura, clasificación y principios de funcionamiento.</li>
                                <li>Analizar sus aplicaciones específicas en la biofabricación.</li>
                                <li>Discutir los desafíos actuales (estabilidad, fiabilidad) y perspectivas futuras (nuevos materiales, miniaturización).</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        },
        summary: {
            title: "Respuesta 'Lograda'",
            content: (
                <p>Este artículo es una revisión científica que explica qué son los biosensores y cómo han evolucionado. Su propósito principal es demostrar la importancia crítica de los biosensores como una herramienta tecnológica para monitorear y controlar con precisión los complejos procesos de la biofabricación, analizando sus aplicaciones actuales y los desafíos que deben superar para el futuro.</p>
            )
        },
        quiz: [
            { question: "¿Cuál es el tema principal del artículo?", options: ["Bioeconomía", "Biosensores", "Fabricación Inteligente", "Control de calidad"], correctAnswerIndex: 1, explanation: "El texto se centra en los biosensores, sus características y aplicaciones.", difficulty: 'Fácil' },
            { question: "¿Qué campo es clave para la bioeconomía, según el texto?", options: ["La robótica", "La nanotecnología", "La biofabricación", "La agricultura"], correctAnswerIndex: 2, explanation: "El texto menciona que la biofabricación es un campo clave para la bioeconomía.", difficulty: 'Fácil' },
            { question: "¿Cuál es el objetivo principal del artículo, según el análisis?", options: ["Inventar un nuevo tipo de biosensor.", "Criticar los métodos actuales de biofabricación.", "Revisar la tecnología de biosensores y su rol en la biofabricación.", "Proponer un nuevo modelo económico para la bioeconomía."], correctAnswerIndex: 2, explanation: "El artículo es una revisión ('review') que busca analizar el estado del arte de los biosensores y destacar su importancia en la biofabricación.", difficulty: 'Fácil' },
            { question: "La 'biofabricación inteligente' requiere herramientas para monitorear en...", options: ["Diferido", "Bajas temperaturas", "Tiempo real", "El vacío"], correctAnswerIndex: 2, explanation: "La necesidad de un control preciso en la biofabricación inteligente exige un monitoreo en tiempo real.", difficulty: 'Intermedio' },
            { question: "Según el abstracto, ¿qué se propone hacer el artículo respecto a los biosensores?", options: ["Venderlos", "Fabricarlos en masa", "Revisar su estructura y clasificación", "Ocultar sus desafíos"], correctAnswerIndex: 2, explanation: "El abstracto indica claramente que uno de los objetivos es revisar la estructura, clasificación y principios de los biosensores.", difficulty: 'Intermedio' },
            { question: "¿Cuál de los siguientes NO es un propósito del artículo mencionado en el abstracto?", options: ["Discutir desafíos actuales", "Analizar aplicaciones en biofabricación", "Crear un nuevo material desde cero", "Revisar sus principios de funcionamiento"], correctAnswerIndex: 2, explanation: "El artículo revisa y analiza, pero no se propone crear un nuevo material como parte de su metodología.", difficulty: 'Intermedio' },
            { question: "La respuesta 'Lograda' describe el artículo como una...", options: ["Propuesta de negocio", "Novela de ficción", "Revisión científica", "Patente de invención"], correctAnswerIndex: 2, explanation: "La naturaleza del artículo es ser una revisión científica que sintetiza conocimiento existente.", difficulty: 'Difícil' },
            { question: "El propósito principal es demostrar la importancia ________ de los biosensores.", options: ["secundaria", "crítica", "opcional", "histórica"], correctAnswerIndex: 1, explanation: "El texto subraya la importancia 'crítica' de los biosensores como una herramienta tecnológica clave.", difficulty: 'Difícil' },
            { question: "Además de las aplicaciones actuales, ¿qué más analiza el artículo sobre el futuro?", options: ["Costos de mercado", "Regulaciones políticas", "Desafíos y perspectivas futuras", "Competencia industrial"], correctAnswerIndex: 2, explanation: "El artículo tiene una visión a futuro, discutiendo los desafíos (estabilidad, fiabilidad) y las perspectivas (miniaturización).", difficulty: 'Difícil' },
            { question: "¿Qué término describe mejor el rol de los biosensores en la biofabricación según el resumen?", options: ["Componente prescindible", "Obstáculo complejo", "Herramienta de monitoreo y control", "Concepto teórico"], correctAnswerIndex: 2, explanation: "El resumen concluye que los biosensores son una herramienta tecnológica fundamental para monitorear y controlar los procesos.", difficulty: 'Difícil' },
        ]
    },
    {
        id: 2,
        title: "Metodología y Materiales",
        icon: BeakerIcon,
        objective: "El grupo describe la metodología utilizada de manera detallada y precisa. Identifican y describen correctamente los materiales, equipos o modelos clave que se mencionan en el artículo.",
        analysis: {
            title: "Análisis para Lograr el Objetivo",
            content: (
                 <div className="space-y-4">
                    <p>Al ser un artículo de revisión (review), su metodología no es experimental, sino de análisis y síntesis de literatura científica existente.</p>
                    <div>
                        <h4 className="font-semibold text-slate-700">Metodología Utilizada:</h4>
                        <p className="mt-1 text-slate-600">Es una revisión bibliográfica sistemática. Los autores recopilan, analizan y resumen información de investigaciones previas. El texto afirma: "Este artículo revisa...", "El artículo también analiza...", "...se revisan sistemáticamente en este documento...".</p>
                    </div>
                     <div>
                        <h4 className="font-semibold text-slate-700">Materiales/Equipos/Modelos Clave:</h4>
                         <ul className="list-disc list-inside space-y-2 pl-4 mt-2 text-slate-600">
                            <li><strong>Componentes Fundamentales:</strong> Elementos biosensores, sustancias objetivo (analitos), y el histórico "electrodo enzimático" de 1956.</li>
                            <li><strong>Tecnologías y Principios:</strong> Se mencionan mecanismos de detección electroquímicos, ópticos, térmicos y de efecto de campo.</li>
                            <li><strong>Configuraciones de Sensores (Modelos):</strong> Se nombran explícitamente dispositivos de fibra óptica, sistemas piezoeléctricos y plataformas de resonancia plasmónica superficial.</li>
                            <li><strong>Campos Integrados:</strong> Biotecnología, bioelectrónica y microelectrónica.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        summary: {
            title: "Respuesta 'Lograda'",
            content: (
               <p>La metodología es una revisión sistemática de la literatura. Los modelos y materiales clave identificados incluyen el concepto del "electrodo enzimático", la integración de campos como biotecnología y microelectrónica, y el uso de diversos principios de detección (ópticos, térmicos). También se describen configuraciones como los dispositivos de fibra óptica y las plataformas de resonancia plasmónica superficial como ejemplos tecnológicos.</p>
            )
        },
        quiz: [
            { question: "La metodología del artículo es experimental, ¿verdadero o falso?", options: ["Verdadero", "Falso"], correctAnswerIndex: 1, explanation: "Falso. Al ser un artículo de revisión ('review'), la metodología consiste en analizar y sintetizar la literatura científica existente, no en realizar nuevos experimentos.", difficulty: 'Fácil' },
            { question: "¿Qué tipo de metodología utiliza el artículo?", options: ["Encuesta de opinión", "Estudio de caso", "Revisión bibliográfica sistemática", "Simulación por computadora"], correctAnswerIndex: 2, explanation: "El artículo recopila, analiza y resume investigaciones previas, lo cual es característico de una revisión bibliográfica sistemática.", difficulty: 'Fácil' },
            { question: "¿Cuál es el primer biosensor histórico mencionado?", options: ["Resonancia plasmónica", "Fibra óptica", "Electrodo enzimático", "Sistema piezoeléctrico"], correctAnswerIndex: 2, explanation: "Se menciona el 'electrodo enzimático' desarrollado por el profesor Clark en 1956 como el primer biosensor.", difficulty: 'Fácil' },
            { question: "Los biosensores son el resultado de la integración de biotecnología, bioelectrónica y...", options: ["Química orgánica", "Física cuántica", "Microelectrónica", "Ingeniería civil"], correctAnswerIndex: 2, explanation: "La introducción destaca la integración sinérgica de la biotecnología, la bioelectrónica y la microelectrónica.", difficulty: 'Intermedio' },
            { question: "¿Cuál de los siguientes NO es un principio de detección mencionado en la página 1?", options: ["Óptico", "Térmico", "Magnético", "Efecto de campo"], correctAnswerIndex: 2, explanation: "El texto menciona mecanismos ópticos, térmicos y de efecto de campo, pero no magnéticos en esta sección.", difficulty: 'Intermedio' },
            { question: "Las 'sustancias objetivo' también son conocidas como...", options: ["Reactivos", "Catalizadores", "Analitos", "Sensores"], correctAnswerIndex: 2, explanation: "El término técnico para las moléculas que el biosensor busca detectar es 'analitos'.", difficulty: 'Intermedio' },
            { question: "Las plataformas de resonancia plasmónica superficial son un ejemplo de...", options: ["Componente fundamental", "Campo del conocimiento", "Configuración de sensor", "Sustancia objetivo"], correctAnswerIndex: 2, explanation: "Junto con la fibra óptica y los sistemas piezoeléctricos, son ejemplos de configuraciones o modelos de sensores.", difficulty: 'Difícil' },
            { question: "La afirmación '...se revisan sistemáticamente en este documento...' refuerza que la metodología es de...", options: ["Creación", "Análisis", "Opinión", "Destrucción"], correctAnswerIndex: 1, explanation: "La frase indica un proceso de análisis y síntesis de información existente, no la creación de datos nuevos.", difficulty: 'Difícil' },
            { question: "Identificar el 'electrodo enzimático' es clave para entender...", options: ["El futuro de los biosensores", "Las limitaciones de la óptica", "El origen histórico del campo", "Las aplicaciones en bioeconomía"], correctAnswerIndex: 2, explanation: "Mencionar el primer biosensor de 1956 sitúa el contexto histórico y muestra la evolución de la tecnología.", difficulty: 'Difícil' },
            { question: "¿Por qué es importante entender que la metodología es una 'revisión'?", options: ["Porque implica que los resultados son opiniones", "Porque significa que no hay datos nuevos, sino una síntesis de datos existentes", "Porque es más barato que un experimento", "Porque los artículos de revisión no son confiables"], correctAnswerIndex: 1, explanation: "Comprender que es una revisión nos ayuda a interpretar los 'resultados' como conclusiones de un análisis bibliográfico, no de un experimento nuevo.", difficulty: 'Difícil' },
        ]
    },
    {
        id: 3,
        title: "Resultados y Conclusiones",
        icon: ChartBarIcon,
        objective: "El grupo identifica los resultados más importantes del artículo y resume las conclusiones principales de manera coherente. Demuestran entender la relación entre ambos.",
        analysis: {
            title: "Análisis para Lograr el Objetivo",
            content: (
                 <div className="space-y-4">
                    <p>Los "resultados" en una revisión son los hallazgos o síntesis principales. Las conclusiones son las implicaciones de esos hallazgos.</p>
                    <div>
                        <h4 className="font-semibold text-slate-700">Resultados/Hallazgos Principales:</h4>
                         <ul className="list-disc list-inside space-y-2 pl-4 mt-2 text-slate-600">
                            <li>El desarrollo de biosensores ha pasado por tres etapas clave.</li>
                            <li>La evolución tecnológica y la innovación de materiales han sido los motores de su transformación.</li>
                            <li>Los biosensores se han establecido como una disciplina científica diferenciada.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-700">Conclusiones Principales:</h4>
                         <ul className="list-disc list-inside space-y-2 pl-4 mt-2 text-slate-600">
                            <li>Los biosensores ofrecen un "potente soporte técnico para la monitorización en tiempo real" en la biofabricación.</li>
                            <li>Es necesario mejorar la estabilidad y fiabilidad de los biosensores.</li>
                            <li>El futuro pasa por nuevos componentes, materiales y la miniaturización (nanotecnología).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        summary: {
            title: "Respuesta 'Lograda'",
            content: (
                <p>El principal hallazgo es que la evolución de los biosensores, impulsada por la innovación, los ha consolidado como tecnología clave. La conclusión principal es que son indispensables para el control preciso en la biofabricación. Para avanzar, se concluye que es necesario superar desafíos de estabilidad mediante el desarrollo de nuevos materiales y tecnologías de miniaturización.</p>
            )
        },
        quiz: [
            { question: "¿Qué impulsa principalmente la evolución de los biosensores según el texto?", options: ["La demanda del mercado", "Regulaciones estrictas", "La evolución tecnológica y la innovación de materiales", "La disminución de costos"], correctAnswerIndex: 2, explanation: "El texto destaca que la innovación en materiales y la evolución tecnológica son los motores que han transformado el campo.", difficulty: 'Fácil' },
            { question: "En un artículo de revisión, los 'resultados' son equivalentes a...", options: ["Nuevos datos de laboratorio", "Opiniones de los autores", "Hallazgos o síntesis del análisis", "Predicciones futuras"], correctAnswerIndex: 2, explanation: "En una revisión, los resultados son las ideas principales que se extraen del análisis de la literatura existente.", difficulty: 'Fácil' },
            { question: "¿Cuál es la conclusión central del abstracto?", options: ["Los biosensores son muy caros", "Los biosensores son un potente soporte técnico para la biofabricación", "La biofabricación no necesita monitoreo", "Los biosensores son obsoletos"], correctAnswerIndex: 1, explanation: "La conclusión principal que se presenta de inmediato es el rol crucial de los biosensores como soporte técnico.", difficulty: 'Fácil' },
            { question: "¿Cuáles son dos desafíos actuales de los biosensores mencionados?", options: ["Color y tamaño", "Velocidad y conectividad", "Estabilidad y fiabilidad", "Marketing y distribución"], correctAnswerIndex: 2, explanation: "El texto señala explícitamente la necesidad de mejorar la estabilidad y la fiabilidad para enfrentar los desafíos actuales.", difficulty: 'Intermedio' },
            { question: "El futuro de los biosensores depende del desarrollo de nuevos materiales y la...", options: ["legislación", "automatización", "globalización", "miniaturización"], correctAnswerIndex: 3, explanation: "El texto apunta a la miniaturización, a través de la microelectrónica y la nanotecnología, como una vía clave para el futuro.", difficulty: 'Intermedio' },
            { question: "El hallazgo de que los biosensores son una disciplina diferenciada justifica la conclusión de que son...", options: ["Un campo sin futuro", "Una moda pasajera", "Una herramienta técnica potente", "Demasiado complejos"], correctAnswerIndex: 2, explanation: "Que sea una disciplina consolidada (hallazgo) apoya la idea de que es una herramienta potente y establecida (conclusión).", difficulty: 'Intermedio' },
            { question: "La necesidad de mejorar la estabilidad (conclusión) se deriva del hecho de que son...", options: ["Una tecnología perfecta", "Una tecnología en evolución con desafíos", "Una tecnología barata", "Una tecnología antigua"], correctAnswerIndex: 1, explanation: "La conclusión de que necesitan mejoras se basa en el entendimiento de que, aunque potentes, todavía enfrentan desafíos.", difficulty: 'Difícil' },
            { question: "El resumen 'Logrado' conecta la 'innovación' (hallazgo) con la necesidad de desarrollar 'nuevos materiales' (conclusión). ¿Qué demuestra esta conexión?", options: ["Una contradicción", "Una relación causa-efecto", "Una coincidencia", "Un error de análisis"], correctAnswerIndex: 1, explanation: "Demuestra una comprensión de cómo los hallazgos (lo que ha pasado) informan las conclusiones (lo que debe pasar). La innovación pasada impulsa la necesidad de innovación futura.", difficulty: 'Difícil' },
            { question: "Según la página 1, ¿el artículo detalla las tres etapas clave del desarrollo de biosensores?", options: ["Sí, las explica en profundidad", "No, solo afirma su existencia", "Solo menciona dos etapas", "Niega que haya etapas"], correctAnswerIndex: 1, explanation: "El texto afirma la existencia de tres etapas, pero no las detalla en esta primera página, lo cual es un matiz importante.", difficulty: 'Difícil' },
            { question: "¿Qué se concluye que es 'indispensable' para el control preciso en la biofabricación?", options: ["La intervención manual", "El uso de biosensores", "Reducir la producción", "Esperar largos periodos"], correctAnswerIndex: 1, explanation: "La conclusión principal es que los biosensores son una herramienta indispensable, no opcional, para el control y monitoreo preciso.", difficulty: 'Difícil' },
        ]
    },
    {
        id: 4,
        title: "Análisis y Perspectiva Personal",
        icon: SparklesIcon,
        objective: "El grupo ofrece una reflexión crítica y personal sobre lo aprendido. Sus respuestas son detalladas y bien justificadas, mostrando una comprensión profunda de la relevancia del artículo en la ciencia de los materiales.",
        analysis: {
            title: "Análisis para Lograr el Objetivo",
            content: (
                <div className="space-y-4">
                    <p>Aquí debes reflexionar sobre la importancia de lo leído.</p>
                    <div>
                        <h4 className="font-semibold text-slate-700">Reflexión Crítica y Relevancia:</h4>
                         <ul className="list-disc list-inside space-y-2 pl-4 mt-2 text-slate-600">
                            <li><strong>Tecnología de Convergencia:</strong> Los biosensores no son un concepto aislado, sino una unión de biología, ingeniería, electrónica y ciencia de materiales.</li>
                            <li><strong>Tecnología Habilitadora:</strong> El artículo los posiciona como una tecnología que permite el avance de un campo entero (la biofabricación inteligente). Conectan la investigación fundamental con una aplicación industrial de gran impacto.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-700">Relevancia en la Ciencia de los Materiales:</h4>
                         <ul className="list-disc list-inside space-y-2 pl-4 mt-2 text-slate-600">
                            <li>El artículo es sumamente relevante. Afirma que la "innovación de materiales han transformado el panorama".</li>
                            <li>Menciona explícitamente "resonancia plasmónica superficial", "fibra óptica", "nanotecnología" y "nuevos materiales para sensores".</li>
                            <li>Esto demuestra que el avance en biosensores está intrínsecamente ligado al descubrimiento y la ingeniería de nuevos materiales con propiedades específicas.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        summary: {
            title: "Respuesta 'Lograda'",
            content: (
                <p>La información revela la naturaleza interdisciplinaria de los biosensores, destacando su papel como tecnología habilitadora para la biofabricación. Su relevancia para la ciencia de los materiales es fundamental, ya que el texto subraya que la innovación en materiales (nanotecnología, fibra óptica, etc.) es el principal motor del avance de los biosensores. Por lo tanto, el desarrollo de nuevos materiales es indispensable para superar los desafíos actuales de esta tecnología.</p>
            )
        },
        quiz: [
            { question: "La reflexión crítica describe a los biosensores como una tecnología de...", options: ["Aislamiento", "Convergencia", "Reemplazo", "Bajo impacto"], correctAnswerIndex: 1, explanation: "Son una tecnología de convergencia porque unen múltiples campos como la biología, la ingeniería y la ciencia de materiales.", difficulty: 'Fácil' },
            { question: "¿Por qué es este artículo relevante para la ciencia de los materiales?", options: ["Porque ignora los materiales", "Porque se enfoca solo en biología", "Porque la innovación en materiales es clave para el avance de los biosensores", "Porque critica el uso de nuevos materiales"], correctAnswerIndex: 2, explanation: "El texto afirma explícitamente que la innovación en materiales ha transformado el campo, haciendo la conexión directa.", difficulty: 'Fácil' },
            { question: "Según la reflexión, ¿por qué son los biosensores una 'tecnología habilitadora'?", options: ["Porque son muy baratos", "Porque permiten el avance de todo un campo, como la biofabricación inteligente", "Porque solo los pueden fabricar ingenieros", "Porque habilitan nuevas leyes físicas"], correctAnswerIndex: 1, explanation: "Una tecnología habilitadora es aquella que impulsa un progreso significativo en un campo. Los biosensores, al permitir el monitoreo en tiempo real, habilitan la 'biofabricación inteligente'.", difficulty: 'Fácil' },
            { question: "La unión de la biología con la ingeniería en los biosensores les da su...", options: ["Poder", "Complejidad innecesaria", "Bajo costo", "Inutilidad"], correctAnswerIndex: 0, explanation: "La reflexión destaca que esta unión o convergencia es lo que les confiere su poder y efectividad.", difficulty: 'Intermedio' },
            { question: "El artículo conecta la investigación fundamental con una aplicación...", options: ["Teórica", "Industrial de gran impacto", "De bajo nivel", "Poco importante"], correctAnswerIndex: 1, explanation: "Una reflexión clave es cómo los biosensores son un puente entre la ciencia básica y una aplicación industrial de impacto económico como la biofabricación.", difficulty: 'Intermedio' },
            { question: "Mencionar la 'nanotecnología' refuerza la importancia de...", options: ["Las grandes maquinarias", "La ciencia de materiales a escala atómica y molecular", "Las políticas gubernamentales", "La historia antigua"], correctAnswerIndex: 1, explanation: "La nanotecnología es un campo central en la ciencia de materiales moderna, enfocado en la manipulación de la materia a pequeña escala.", difficulty: 'Intermedio' },
            { question: "El resumen 'Logrado' describe la innovación en materiales como el principal ______ del avance.", options: ["obstáculo", "resultado", "motor", "crítico"], correctAnswerIndex: 2, explanation: "La innovación en materiales no es un resultado, sino el 'motor' o la fuerza impulsora que permite el avance de la tecnología de biosensores.", difficulty: 'Difícil' },
            { question: "¿Qué demuestra la mención de 'resonancia plasmónica superficial' y 'fibra óptica'?", options: ["Que la tecnología está obsoleta", "Que el avance depende de materiales con propiedades ópticas y de superficie específicas", "Que solo importan los componentes biológicos", "Que los sensores son muy frágiles"], correctAnswerIndex: 1, explanation: "Estas tecnologías específicas evidencian que el progreso requiere la ingeniería de materiales con propiedades muy particulares para interactuar con la luz y los sistemas biológicos.", difficulty: 'Difícil' },
            { question: "La naturaleza 'interdisciplinaria' de los biosensores significa que...", options: ["Pertenecen a una sola disciplina", "Requieren la colaboración de múltiples campos de la ciencia", "Son fáciles de entender para cualquiera", "Solo los biólogos pueden trabajar en ellos"], correctAnswerIndex: 1, explanation: "Interdisciplinario significa que se encuentra en la intersección de varias disciplinas, requiriendo una colaboración entre ellas.", difficulty: 'Difícil' },
            { question: "La conclusión final de la respuesta 'Lograda' es que el desarrollo de nuevos materiales es...", options: ["Opcional", "Indispensable", "Poco rentable", "Una idea a futuro"], correctAnswerIndex: 1, explanation: "La reflexión culmina afirmando que el avance en materiales no es solo una opción, sino un requisito 'indispensable' para superar los desafíos tecnológicos actuales.", difficulty: 'Difícil' },
        ]
    }
];