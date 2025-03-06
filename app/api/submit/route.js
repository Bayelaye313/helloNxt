import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Récupère les données du corps de la requête
    const body = await request.json();
    const { name, email, message } = body;

    // Valide les données (exemple simple)
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires" },
        { status: 400 }
      );
    }

    // Simule un traitement (par exemple, enregistrement dans une base de données)
    console.log("Données reçues :", { name, email, message });

    // Retourne une réponse JSON
    return NextResponse.json(
      { success: true, message: "Données reçues avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors du traitement de la requête :", error);
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}
