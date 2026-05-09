#!/usr/bin/env python3
"""
Müəyyən mövzuya malik məktəblərin siyahısını qaytaran funksiya
"""


def schools_by_topic(mongo_collection, topic):
    """
    mongo_collection daxilində 'topic' mövzusunu ehtiva edən 
    bütün məktəbləri siyahı şəklində qaytarır.
    """
    return list(mongo_collection.find({"topics": topic}))
