import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import '../App.css';

class Terms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: this.props.language,
            agree: false};
      }

    render() {
        return ( 
            <Grid className="termsGrid"
                    container
                    alignItems="center"
                    direction="row"
                    justify="center">
                <Grid item xs={12}>
                    <div>
                        {this.state.language == "English" ? (
                            <div>
                            <h2>Initial Consultation Agreement:</h2>
                            <div className="leftAlign termsBox">
                            <div><b><i>(This just says you agree I am not your lawyer until you sign a separate actual contract)</i></b></div>
            <div>Today, I am having an initial consultation with the Benenati Law Firm (the "Firm"). I am advised that the 
                Firm is a debt relief agency as defined in the Bankruptcy Abuse Prevention and Consumer Protection Act of 2005
                 ("BAPCPA"), and that it helps people file for relief under the bankruptcy code.
            </div>
            <div><span><b>There is no charge for the initial consultation.</b></span> The Firm provides the following services
            at the initial consultation: </div>
            <div>
                <ul class="list">
                    <li>
                        A description of the relief available, the benefits and the risks of filing bankruptcy under sections 7 and
                        13 of the Bankruptcy code.
                    </li>
                    <li>An analysis based on the information and documents provided by me, if any, of my income, expenses, assets, and 
                        liabilities. This analysis is only preliminary since the Firm does not have all the information and documents that 
                        will be required to fully evalaute my situation.
                    </li>
                    <li>If it appears from this analysis that bankruptcy may be an appropriate remedy for me, a discussion of the information
                        and documents I will need to provide the Firm. If it appears from today's analysis that bankruptcy may not be an appropriate
                        remedy for me, a discussion of other possible alternatives.
                    </li>
                </ul>
            </div>
            <div>I have been informed and agree that the Firm will not provide any services or bankruptcy assistance to me at this time. It is 
                understood that the Firm will not provide any other legal services to me and will not file bankruptcy for me unless and until I have 
                signed a retainer agreement, the Bankruptcy Questionnaire has been completed, all documents and information requested have been provided,
                and I have received a certification and budget analysis from an approved credit counseling agency. Should I wish the Firm to provide additional
                services, including the filing of bankruptcy, I will sign a separate retainer agreement detailing such services and their costs.
            </div>
            </div>

            <FormControlLabel
          control={
            <Checkbox
              checked={this.agree}
              value="accept"
              color="primary"
            />
          }
          label="I agree to these terms and conditions"
        />

            </div>
                        ) : 
                        (
                            <div>

                        <h2>Acuerdo de Consulta Inicial:</h2>
                        <div className="leftAlign termsBox">
                        <div>Hoy en dia, tengo una consulta inicial con Walter F. Benenati, Crédito Fiscal P.A. (la "Empresa"). Me han informado de que la empresa es una 
                agencia de alivio de la deuda tal como se defineen la prevención del Abuso de Bancarrota y Protección al Consumidor de 2005 ("BAPCPA"), y que ayuda
                a las personas solicitar ayuda bajo el código de bancarrota.
            </div>
            <div><span><b>No se cobra por la consulta incial.</b></span> La empresa ofrece los siguientes servicios en la consulta inicial: </div>
            <div>
                <ul>
                    <li>
                        Una descripción de la ayuda disponible, los beneficios y los riesgos de la bancarrota en las secciones 7 y 13 del Código de Bancarrota.
                    </li>
                    <li>El análisis, basado en la información y los documentos presentados por mí, mis ingresos, gastos, activos y pasivos. Este análisis es sólo
                        preliminar, ya que la empresa no tiene toda la información y los documentos que serán necesarios para evaluar completamente mi situación.
                    </li>
                    <li>Si de este análisis la bancarrota puede ser una solución adecuada para mí, habrá una discusión de la información y los documentos que tendrá
                        que proporcionar a la empresa. Si se desprende del análisis de hoy que la bancarrota no puede ser un recurso apropiado para mí, habrá una discusión
                        de otras posibles alternativas.
                    </li>
                </ul>
            </div>
            <div>He sido informado y acepto que la empresa no proporciona ningún servicio o asistencia de bancarrota para mí en este momento. Se entiende que la empresa no 
                ofrecen ningún servicio legal a mí y no se declara en bancarrota para mí a menos que hasta que haya firmado un acuerdo de retención, el Cuestionario de quiebra 
                se ha completado, todos los documentos e información han sido proporcionados, y yo he recibido una certificación y el análisis del presupuesto de una agencia de 
                asesoría de crédito aprobada. En caso de que deseo que la empresa me ofresca servicios adicionales, incluyendo la presentación de la quiebra, voy a firmar un acuredo 
                de retención por separado detallando los mismos y su costo.
            </div>
                        </div>

                        <FormControlLabel
          control={
            <Checkbox
              checked={this.agree}
              value="accept"
              color="primary"
            />
          }
          label="Estoy de acuerdo"
        />
                        </div>
                        )}
                    </div>
                </Grid>
            </Grid>   
        
        );
    }
}

export default Terms;