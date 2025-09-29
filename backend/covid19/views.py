from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
import pandas as pd
import seaborn as sns

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt


@api_view(["GET"])
def global_stats(request):
    url = "https://disease.sh/v3/covid-19/all"
    data = requests.get(url).json()
    return Response(data)


@api_view(["GET"])
def country_stats(request, country):
    url = f"https://disease.sh/v3/covid-19/countries/{country}"
    data = requests.get(url).json()
    return Response(data)


@api_view(["GET"])
def covid_chart(request):
    url = "https://disease.sh/v3/covid-19/all"
    data = requests.get(url).json()

    df = pd.DataFrame([data])
    plt.figure(figsize=(6, 4))
    sns.barplot(
        x=["Cases", "Recovered", "Deaths"],
        y=[df["cases"][0], df["recovered"][0], df["deaths"][0]]
    )
    plt.title("COVID-19 Global Overview")
    plt.savefig("static/covid.png")

    return Response({"chart_url": "/static/covid.png"})
