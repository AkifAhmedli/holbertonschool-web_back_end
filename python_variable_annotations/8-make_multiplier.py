#!/usr/bin/env python3
"""
Bu modul başqa bir funksiya qaytaran yüksək dərəcəli
funksiyanı ehtiva edir.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Multiplier qəbul edir və verilmiş rəqəmi həmin multiplier-ə
    vuran yeni bir funksiya qaytarır.
    """
    def multiplier_func(n: float) -> float:
        return n * multiplier

    return multiplier_func
