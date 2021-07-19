import React from "react";
import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar ,
    IonButtons,
    IonButton,
    IonIcon,
    IonFab,
    IonFabButton
} from "@ionic/react";
import { add } from "ionicons/icons";
import { isPlatform } from "@ionic/core";

const BadMemories: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Bad Memories</IonTitle>
                    {isPlatform('ios') && (
                        <IonButtons slot="end">
                            <IonButton routerLink="new-memory">
                                <IonIcon slot="icon-only" icon={add}/>
                            </IonButton>
                        </IonButtons>
                    )}
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2> Bad Memories</h2>
                {!isPlatform('ios') && (
                    <IonFab vertical="bottom" horizontal="end">
                        <IonFabButton routerLink="/new-memory">
                            <IonIcon icon={add}/>
                        </IonFabButton>
                    </IonFab>
                )}
            </IonContent>
        </IonPage>
    );
};
export default BadMemories;