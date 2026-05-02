#!/usr/bin/env python3
"""
Sadə paginasiya tətbiq edən modul.
"""
import csv
import math
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Səhifə nömrəsinə və ölçüsünə görə indeks aralığını hesablayır.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)


class Server:
    """Populyar körpə adları verilənlər bazasını paginasiya edən server klası.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Dataseti keşləyir və başlıqsız olaraq qaytarır.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Datasetdən müvafiq səhifəni qaytarır.
        """
        # Tip və dəyər yoxlanışı
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # Dataseti əldə edirik
        data = self.dataset()

        # İndeksləri hesablayırıq
        start, end = index_range(page, page_size)

        # Əgər start indeksi datasetin uzunluğundan böyükdürsə boş siyahı
        if start >= len(data):
            return []

        # Dilimləmə (Slicing) edib qaytarırıq
        return data[start:end]
