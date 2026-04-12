#!/usr/bin/env python3
"""
Bu modul float tipli rəqəmlərdən ibarət siyahını cəmləyən
funksiyanı ehtiva edir.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Float siyahısını qəbul edir və onların cəmini qaytarır."""
    return sum(input_list)
