import requests
import json

class GetDataStarWarsAPI():

    def __init__(self, pesquisa) -> None:
        self._pesquisa = pesquisa
    
    def requisicao_api(self):
        res = requests.get(f'https://swapi.dev/api/{self._pesquisa}/{"1"}')

        if res.status_code == 200:
            return res.json()
        else:
            return res.status_code

    def imprime_requisicao(self):
        dados = self.requisicao_api()
        if type(dados) is not int:
            print(dados)
        else:
            print(dados)

if __name__ == '__main__':

    repositorio = GetDataStarWarsAPI('people')
    repositorio.imprime_requisicao()