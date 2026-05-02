#!/usr/bin/env python3
"""
Silinməyə davamlı hypermedia paginasiya.
"""
import csv
import math
from typing import List, Dict, Any


class Server:
    """Populyar körpə adları verilənlər bazasını paginasiya edən server klası.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Dataseti keşləyir.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataseti indekslərlə (0-dan başlayaraq) lüğətə çevirir.
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Silinmələrdən asılı olmayaraq ardıcıl məlumat qaytaran metod.
        """
        # Verilənləri hazırlayırıq
        data_dict = self.indexed_dataset()
        # Validasiya: indeks None olmamalı və mövcud aralıqda olmalıdır
        assert index is not None and 0 <= index < len(self.dataset())
        data = []
        current_index = index
        # page_size qədər element tapana qədər davam edirik
        while len(data) < page_size and current_index < len(self.dataset()):
            item = data_dict.get(current_index)
            if item is not None:
                data.append(item)
            current_index += 1
        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': current_index
        }
