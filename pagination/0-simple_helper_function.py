#!/usr/bin/env python3
"""
Paginasiya üçün köməkçi funksiya modulu.
Bu modul səhifələmə indekslərini hesablamaq üçün istifadə olunur.
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Verilmiş səhifə və səhifə ölçüsünə görə başlanğıc və bitiş
    indekslərini qaytarır.

    Args:
        page (int): Səhifə nömrəsi (1-dən başlayır).
        page_size (int): Hər səhifədəki elementlərin sayı.

    Returns:
        Tuple[int, int]: Başlanğıc və bitiş indeksini ehtiva edən tuple.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
